interface ContactFieldProps {
  label: string;

  placeholder: string;

  required?: boolean;

  type?: string;
}

export default function ContactField({
  label,
  placeholder,
  required,
  type = "text",
}: ContactFieldProps) {
  return (
    <div>
      <label
        className="
          mb-3
          block

          text-sm
          font-semibold

          text-brand
        "
      >
        {label}

        {required && <span className="ml-1 text-destructive">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-14
          w-full

          rounded-2xl

          border
          border-soft

          bg-background

          px-5

          text-brand

          transition-all

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
