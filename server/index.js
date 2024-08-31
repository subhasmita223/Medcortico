import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js';
import errorHandler from "./middlewares/errorHandler.js";
dotenv.config();

const app=express();


//Middleware
app.use(cors());
app.use(express.json());

//connect to database
connectDB();

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
// Serve static files (profile images)
app.use('/profileImages', express.static('upload/profileImages'));


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

//START THEconst appServer = server.listen(PORT, () => {

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
