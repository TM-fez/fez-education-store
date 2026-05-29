CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'proposal_sent', 'won', 'lost');

CREATE TABLE public.corporate_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization_type TEXT,
    employee_count TEXT,
    training_interest TEXT NOT NULL,
    preferred_dates TEXT,
    location TEXT,
    budget_range TEXT,
    preferred_format TEXT,
    message TEXT,
    status lead_status DEFAULT 'new'::lead_status NOT NULL
);

-- Enable RLS
ALTER TABLE public.corporate_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts so website visitors can submit the form
CREATE POLICY "Allow public inserts" ON public.corporate_leads
    FOR INSERT TO anon
    WITH CHECK (true);

-- Only authenticated users (admins) can view leads
CREATE POLICY "Allow authenticated read" ON public.corporate_leads
    FOR SELECT TO authenticated
    USING (true);

-- Only authenticated users (admins) can update leads (e.g. status)
CREATE POLICY "Allow authenticated update" ON public.corporate_leads
    FOR UPDATE TO authenticated
    USING (true);
