import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.status === 201) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section className="bg-[#0b1120] text-white py-8 min-h-[80vh] text-center">
      {/* Center headings and paragraph */}
      <h2 className="text-3xl font-bold text-blue-400 mb-2">Contact Me</h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Let’s connect! Feel free to reach out for collaborations, opportunities, or inquiries.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-[#0B1120] shadow-xl rounded-2xl p-8 border border-blue-800"
      >
        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="yourname@email.com"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}
