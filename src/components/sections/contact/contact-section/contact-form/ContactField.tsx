import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormFieldContext,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useFormContext } from "react-hook-form";

import type { ContactSchema } from "./contact.schema";

export default function ContactFields() {
  const form = useFormContext<ContactSchema>();

  return (
    <div
      className="
        grid
        gap-6

        md:grid-cols-2
      "
    >
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>

            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>

            <FormControl>
              <Input placeholder="john@example.com" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
