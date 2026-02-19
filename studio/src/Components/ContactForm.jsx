import { useState } from "react";

const ContactForm = () => {
  const [country, setCountry] = useState("US");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Form Data:", data);
    alert("Form submitted! Check console.");
  };

  return (
    <section className=" py-16 px-4">
      <div className="max-w-xl mx-auto bg-linear-to-b from-gray-700 via-gray-900 to-black rounded-xl shadow-lg shadow-white/10  p-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mt-2">
          We’d love to hear from you. Please fill out this form.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 ">
          {/* First & Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone */}
          <div className="flex gap-3">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none"
            >
              <option value="US">+1 (US)</option>
              <option value="IN">+91 (IN)</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder={
                country === "US" ? "(000) 000-0000" : "00000-00000"
              }
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Leave us a message..."
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required className="accent-blue-600" />
            I agree to the privacy policy
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-300 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
