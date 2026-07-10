import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import { contactSchema, type ContactSchema } from "./contact.schema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactSchema) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
      {/* ================= Row 1 ================= */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-brand"
          >
            Full Name *
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className="
              h-14
              w-full

              rounded-2xl

              border
              border-soft

              bg-background

              px-5

              outline-none

              transition-all

              focus:border-secondary
              focus:ring-4
              focus:ring-secondary/10
            "
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-destructive">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-brand"
          >
            Email Address *
          </label>

          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="
              h-14
              w-full

              rounded-2xl

              border
              border-soft

              bg-background

              px-5

              outline-none

              transition-all

              focus:border-secondary
              focus:ring-4
              focus:ring-secondary/10
            "
          />

          {errors.email && (
            <p className="mt-2 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* ================= Row 2 ================= */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company */}

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-brand"
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            placeholder="Informatex Tech"
            {...register("company")}
            className="
              h-14
              w-full

              rounded-2xl

              border
              border-soft

              bg-background

              px-5

              outline-none

              transition-all

              focus:border-secondary
              focus:ring-4
              focus:ring-secondary/10
            "
          />

          {errors.company && (
            <p className="mt-2 text-sm text-destructive">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Service */}

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-brand"
          >
            Service Interest *
          </label>

          <select
            id="service"
            {...register("service")}
            className="
              h-14
              w-full

              rounded-2xl

              border
              border-soft

              bg-background

              px-5

              outline-none

              transition-all

              focus:border-secondary
              focus:ring-4
              focus:ring-secondary/10
            "
          >
            <option value="">Select a service</option>

            <option value="web">Web Development</option>

            <option value="mobile">Mobile App Development</option>

            <option value="uiux">UI / UX Design</option>

            <option value="cloud">Cloud Solutions</option>

            <option value="consulting">IT Consulting</option>
          </select>

          {errors.service && (
            <p className="mt-2 text-sm text-destructive">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* ================= Message ================= */}

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand"
        >
          Message *
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project..."
          {...register("message")}
          className="
            w-full

            rounded-2xl

            border
            border-soft

            bg-background

            px-5
            py-4

            outline-none

            transition-all

            focus:border-secondary
            focus:ring-4
            focus:ring-secondary/10
          "
        />

        {errors.message && (
          <p className="mt-2 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* ================= Submit ================= */}

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Send Message
      </Button>

      {/* ================= Privacy ================= */}

      <p className="text-sm text-muted">
        🔒 Your information is secure and will never be shared with third
        parties.
      </p>
    </form>
  );
}
