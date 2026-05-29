import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  // 1. Verify User Session
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // 2. Verify Admin Role securely from the profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    // Kick non-admins out. In production, a 404 or a "Forbidden" page is better
    // to mask the existence of the admin route, but a redirect is fine for V1.
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[var(--background)] flex">
      {/* Sidebar / Navigation */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--card)] hidden md:block p-6">
        <h2 className="font-heading font-bold text-xl text-[var(--color-brand-500)] mb-8">
          Fez Admin
        </h2>
        <nav className="space-y-2 flex flex-col">
          <Link href="/admin" className="px-4 py-2 hover:bg-[var(--foreground)]/5 text-[var(--foreground)]/70 hover:text-[var(--foreground)] rounded-lg font-medium text-sm transition-colors">
            Order Management
          </Link>
          <Link href="/admin/leads" className="px-4 py-2 hover:bg-[var(--foreground)]/5 text-[var(--foreground)]/70 hover:text-[var(--foreground)] rounded-lg font-medium text-sm transition-colors">
            Corporate Leads
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <h1 className="font-heading font-semibold text-lg text-[var(--foreground)]">Order Management</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--foreground)]/70">Admin Mode</span>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
