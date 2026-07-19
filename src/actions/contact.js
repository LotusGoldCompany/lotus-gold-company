"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  grams: z.coerce.number().positive("Grams must be greater than 0"),
  purity: z.string(),
  service: z.string(),
});

export async function submitContactForm(data) {
  try {
    const validatedData = contactSchema.parse(data);

    const submissionData = {
      ...validatedData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: `New Lead: ${validatedData.service} - ${validatedData.name}`,
      from_name: "Lotus Gold Automated System"
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to submit form to Web3Forms." };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data.", fieldErrors: error.flatten().fieldErrors };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
