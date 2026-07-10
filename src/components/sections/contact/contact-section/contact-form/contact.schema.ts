import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),

  email: z.email("Please enter a valid email."),

  company: z.string().optional(),

  service: z.string().min(1, "Please select a service."),

  message: z.string().min(20, "Message must be at least 20 characters."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
