interface ContactTextareaProps {
  label: string;

  placeholder: string;

  required?: boolean;
}

export default function ContactTextarea({
  label,
  placeholder,
  required,
}: ContactTextareaProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-brand">
        {label}

        {required && <span className="ml-1 text-destructive">*</span>}
      </label>

      <textarea
        rows={6}
        placeholder={placeholder}
        className="
          w-full

          rounded-2xl

          border
          border-soft

          bg-background

          px-5
          py-4

          text-brand

          placeholder:text-muted

          focus:border-secondary
          focus:outline-none
          focus:ring-4
          focus:ring-secondary/10
        "
      />
    </div>
  );
}
