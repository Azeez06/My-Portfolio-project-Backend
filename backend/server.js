import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import messageRoutes from "./routes/messageRoutes.js"; // ✅ New route

// Load environment variables
import 'dotenv/config';


// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use("/api/contact", contactRoutes); // For submitting contact form
app.use("/api", messageRoutes);         // For fetching saved messages

// Root route (optional)
app.get("/", (req, res) => {
  res.send("✅ API is running and connected successfully!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
