"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { toast } from "sonner";
import { submitContactForm } from "~/app/actions";
import { motion } from "framer-motion";
import posthog from "posthog-js";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      effect="expandIcon"
      icon={Send}
      iconPlacement="right"
      type="submit"
      disabled={pending}
      className="bg-teal-300 text-[#070707] hover:bg-teal-400"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const initialState = { message: "", errors: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      posthog.capture("contact_form_submitted");
      formRef.current?.reset();
    } else if (state.message && state.errors) {
      if (state.message && !state.success && Object.keys(state.errors).length > 0) {
        toast.error("Something went wrong", {
          description: state.message,
        });
      }
    }
  }, [state]);

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Heading aligned left */}
      <motion.h2
        className="mb-8 border-b border-zinc-800 pb-2 text-3xl font-bold text-left"
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      {/* Centered form container */}
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-3xl rounded-lg border border-zinc-800 bg-[#101010] p-6"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="border-gray-700 bg-[#202020] text-gray-200 focus:border-teal-300/50"
                  required
                />
                {state.errors?.name?.map((error: string) => (
                  <p className="text-sm font-medium text-red-500" key={error}>
                    {error}
                  </p>
                ))}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  type="email"
                  className="border-gray-700 bg-[#202020] text-gray-200 focus:border-teal-300/50"
                  required
                />
                {state.errors?.email?.map((error: string) => (
                  <p className="text-sm font-medium text-red-500" key={error}>
                    {error}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className="min-h-[120px] border-gray-700 bg-[#202020] text-gray-200 focus:border-teal-300/50"
                required
              />
              {state.errors?.message?.map((error: string) => (
                <p className="text-sm font-medium text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <SubmitButton />
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
