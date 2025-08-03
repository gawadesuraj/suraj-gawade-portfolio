import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // success or error

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white px-4"
    >
      <div className="border-2 border-[#d16f1e] rounded-2xl shadow-[0_0_40px_#d16f1e] w-[90vw] max-w-[1000px] h-auto sm:h-[550px] flex flex-col justify-center items-center p-6 sm:p-10 bg-white/5 backdrop-blur-sm">
        <div className="w-full max-w-xl animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              Get In Touch
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Have a project or idea? Let’s talk!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              aria-label="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Your Message"
              aria-label="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] hover:-translate-y-0.5"
            >
              ✉️ Send Message
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
