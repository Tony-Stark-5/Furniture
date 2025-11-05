import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/furnixarDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api", authRoutes);

// ✅ Start Server
app.listen(8000, () =>
  console.log("🚀 Server running on http://localhost:8000")
);
