const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const memberRoutes = require("./routes/memberRoutes");
const bookRoutes = require("./routes/bookRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const bookHistoryRoutes = require("./routes/bookHistoryRoutes");
const statisticsRoutes = require("./routes/statisticsRoutes");
const cors = require("cors");
require("dotenv").config(); // Only need this once

const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors());
app.options("*", cors());
app.use(express.json());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/history", bookHistoryRoutes);
app.use("/api/stats", statisticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
