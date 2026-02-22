import { useState } from "react";

const ContactForm = () => {
  const [country, setCountry] = useState("US");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Form Data:", data);
    alert("Form submitted! Check console.");
  };

  const [service, setService] = useState("");

  return (
    <section className="mt-5">
      <div className="w-68 md:w-lg mx-auto bg-linear-to-b from-gray-700 via-gray-900 to-black rounded-3xl shadow-lg shadow-white/10 p-5 md:p-8">
        <div className=" relative">
          <h2 className="text-4xl md:text-5xl font-cormorant text-center text-white z-30">
            Contact Us
          </h2>
          <h1 className=" absolute text-4xl md:text-6xl font-love-light text-black/50 -top-3 md:-top-5 left-12 md:left-25 tracking-wider">Book Now</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 md:mt-8 space-y-5 ">
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
          <div className="flex gap-3 flex-wrap">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none"
            >
              <option value="IN" className="text-black">
                +91 (IN)
              </option>
              {/* <option value="US">+1 (US)</option> */}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder={country === "US" ? "(000) 000-0000" : "00000-00000"}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Dropdown */}
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-black">
              Event Type
            </option>
            <option value="wedding" className="text-black">
              Wedding Photography
            </option>
            <option value="prewedding" className="text-black">
              Pre-Wedding Shoot
            </option>
            <option value="event" className="text-black">
              Destination Wedding Shoot
            </option>
            <option value="other" className="text-black">
              Maternity Photoshoot
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </select>

          {/* Event Date */}
          <div className="relative">
            <input
              type="Date"
              placeholder="Date of Your Event"
              name="eventDate"
              min={new Date().toISOString().split("T")[0]}
              required
              onFocus={(e) => e.target.showPicker?.()}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          {/* Message */}
          <textarea
            name="message"
            rows="2"
            placeholder="Leave us a message..."
            required
            className="w-full h-fit border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

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
