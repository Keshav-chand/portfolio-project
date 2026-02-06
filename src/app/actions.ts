"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  const errors: FormState["errors"] = {};

  // Validation
  if (!name) errors.name = ["Name is required"];
  if (!email) errors.email = ["Email is required"];
  else if (!email.includes("@")) errors.email = ["Invalid email"];
  if (!message) errors.message = ["Message is required"];

  if (Object.keys(errors).length > 0) {
    return {
      message: "Validation failed",
      errors,
      success: false,
    };
  }

  // Single try/catch block for sending email
  try {
    console.log("Sending email...");
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // or your verified email
      to: "Keshavchand204@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    console.log("Email sent successfully!");

    return {
      message: "Message sent!",
      success: true,
      errors: {},
    };
  } catch (err: any) {
    console.error("Email send failed:", err);

    return {
      message: "Failed to send message",
      success: false,
      errors: {},
    };
  }
}
