"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import type { ContactFormData } from "@/types";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-secondary/30 bg-background/50 px-4 py-3 text-text placeholder-text/30 outline-none transition-colors focus:border-primary";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-5"
    >
      <div>
        <input
          {...register("name", { required: "Name is required", maxLength: { value: 200, message: "Name is too long" } })}
          placeholder="Your Name"
          maxLength={200}
          className={inputClasses}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Email is required",
            maxLength: { value: 320, message: "Email is too long" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          type="email"
          placeholder="Your Email"
          maxLength={320}
          className={inputClasses}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("subject", { required: "Subject is required", maxLength: { value: 500, message: "Subject is too long" } })}
          placeholder="Subject"
          maxLength={500}
          className={inputClasses}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message", { required: "Message is required", maxLength: { value: 5000, message: "Message is too long" } })}
          placeholder="Your Message"
          maxLength={5000}
          rows={5}
          className={`${inputClasses} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "sent" && (
        <p className="text-center text-sm text-primary">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </motion.form>
  );
}
