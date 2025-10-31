import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { 
      type: String, 
      required: [true, "Email is required"], 
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    message: { type: String, required: [true, "Message cannot be empty"] },
  },
  { timestamps: true } // ✅ adds createdAt & updatedAt automatically
);

export default mongoose.model("Contact", contactSchema);
