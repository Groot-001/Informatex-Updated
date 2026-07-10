export default function ContactForm() {
  return (
    <form className="mt-10">
      {/* Row 1 */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>Full Name</div>

        <div>Email</div>
      </div>

      {/* Row 2 */}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>Company</div>

        <div>Service</div>
      </div>

      {/* Message */}

      <div className="mt-6">Message</div>

      {/* Button */}

      <div className="mt-8">Button</div>

      {/* Privacy */}

      <div className="mt-8">Privacy</div>
    </form>
  );
}
