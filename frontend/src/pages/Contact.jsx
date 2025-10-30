import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold text-blue-400 mb-2">Contact Me</h2>
      <p className="text-gray-300 mb-10">
        Let’s connect! Feel free to reach out for collaborations, opportunities, or inquiries.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-[#0B1120] shadow-xl rounded-2xl p-8 border border-blue-800"
      >
        <form className="flex flex-col space-y-5">
          {/* Name Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="yourname@email.com"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-blue-300 mb-1">Message</label>
            <textarea
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
        </form>
      </motion.div>
    </section>
  );
}
