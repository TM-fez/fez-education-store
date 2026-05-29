"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitCorporateLead(formData: FormData) {
  const company_name = formData.get("company_name")?.toString();
  const contact_person = formData.get("contact_person")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const organization_type = formData.get("organization_type")?.toString();
  const employee_count = formData.get("employee_count")?.toString();
  const training_interest = formData.get("training_interest")?.toString();
  const preferred_format = formData.get("preferred_format")?.toString();
  const message = formData.get("message")?.toString();

  // Basic validation
  if (!company_name || !contact_person || !email || !training_interest) {
    return { success: false, error: "Please fill out all required fields." };
  }

  // Create a supabase client with the server context
  const supabase = await createClient();

  // Insert into corporate_leads table
  const { error } = await supabase.from("corporate_leads").insert([
    {
      company_name,
      contact_person,
      email,
      phone,
      organization_type,
      employee_count,
      training_interest,
      preferred_format,
      message,
      status: "new",
    },
  ]);

  if (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error: "An error occurred while submitting your inquiry. Please try again or contact us directly." };
  }

  // Optional: Send an email notification here using a service like Resend, if configured.

  revalidatePath("/admin/leads");
  
  return { success: true };
}

export async function updateLeadStatus(id: string, newStatus: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("corporate_leads")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) {
    console.error("Error updating lead status:", error);
    return { success: false, error: "Failed to update status." };
  }

  revalidatePath("/admin/leads");
  return { success: true };
}
