'use server';
import { Resend } from 'resend';

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
  // Get raw values
  const rawName = formData.get('name');
  const rawEmail = formData.get('email');
  const rawMessage = formData.get('message');

  // Convert to string safely, only if they are strings
  const name = typeof rawName === 'string' ? rawName : '';
  const email = typeof rawEmail === 'string' ? rawEmail : '';
  const message = typeof rawMessage === 'string' ? rawMessage : '';

  const errors: FormState['errors'] = {};

  if (!name) errors.name = ['Name is required'];
  if (!email) errors.email = ['Email is required'];
  else if (!email.includes('@')) errors.email = ['Invalid email'];
  if (!message) errors.message = ['Message is required'];

  if (Object.keys(errors).length > 0) {
    return { message: 'Validation failed', errors, success: false };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'Keshavchand204@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { message: 'Message sent!', success: true, errors: {} };
  } catch (err: unknown) {
    console.error(err);
    return { message: 'Failed to send message', success: false, errors: {} };
  }
}
