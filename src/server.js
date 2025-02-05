import dotenv from 'dotenv';
import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import rsvpRoutes from './routes/rsvpRoutes.js'

dotenv.config()

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/rsvp", rsvpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
