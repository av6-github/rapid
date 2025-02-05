import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

import eventRoutes from './routes/eventRoutes.js';
import authRoutes from './routes/authRoutes.js';

app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);

export default app
