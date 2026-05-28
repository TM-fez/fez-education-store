-- 1. Custom Types
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE order_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE payment_status AS ENUM ('pending', 'verified', 'rejected');
CREATE TYPE payment_method AS ENUM ('bank_transfer', 'orange_money');

-- 2. Profiles Table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    email TEXT UNIQUE NOT NULL,
    role user_role DEFAULT 'user'::user_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Categories Table
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 4. Products Table
CREATE TABLE public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    thumbnail_url TEXT,
    pdf_path TEXT, -- Reference to private storage bucket path
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    is_featured BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 5. Orders Table
CREATE TABLE public.orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL CHECK (total_price >= 0),
    status order_status DEFAULT 'pending'::order_status NOT NULL,
    payment_method payment_method NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 6. Order Items Table
CREATE TABLE public.order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
    product_id UUID REFERENCES public.products(id) ON DELETE RESTRICT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. Payments Table
CREATE TABLE public.payments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL UNIQUE,
    proof_url TEXT NOT NULL, -- Public bucket URL
    sender_name TEXT NOT NULL,
    reference_number TEXT,
    status payment_status DEFAULT 'pending'::payment_status NOT NULL,
    reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 8. Auto-update timestamps triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- 9. Auto-create Profile Trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    'user'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 10. Security Definer Admin Check Function
-- Used for lightweight RLS admin checks without infinite recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- 11. Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- 12. RLS Policies

-- Profiles
CREATE POLICY "Users can view their own profile." ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles." ON public.profiles FOR SELECT USING (public.is_admin());

-- Categories & Products
-- Publicly visible to everyone (needed for the storefront)
CREATE POLICY "Categories are viewable by everyone." ON public.categories FOR SELECT USING (true);
CREATE POLICY "Products are viewable by everyone." ON public.products FOR SELECT USING (true);
-- Write operations restricted to admins
CREATE POLICY "Admins can manage categories." ON public.categories FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage products." ON public.products FOR ALL USING (public.is_admin());

-- Orders
CREATE POLICY "Users can view their own orders." ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own orders." ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view and manage all orders." ON public.orders FOR ALL USING (public.is_admin());

-- Order Items
CREATE POLICY "Users can view their own order items." ON public.order_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Users can insert order items for their orders." ON public.order_items FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Admins can view and manage all order items." ON public.order_items FOR ALL USING (public.is_admin());

-- Payments
CREATE POLICY "Users can view their own payments." ON public.payments FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.orders WHERE orders.id = payments.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Users can insert payments for their orders." ON public.payments FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.orders WHERE orders.id = payments.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Admins can view and manage all payments." ON public.payments FOR ALL USING (public.is_admin());

-- 13. Storage Setup (assuming buckets are created via dashboard or another script)
-- We will setup policy logic here as well for documentation purposes.
-- `private-downloads` bucket: 
--  - NO public read access. 
--  - NextJS server creates signed URLs.
-- `public-payment-proofs` bucket: 
--  - Users can INSERT. 
--  - Admins can SELECT.
