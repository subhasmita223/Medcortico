import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose'

dotenv.config();

const app=express();
const server=http.createServer(app);

//Middleware
app.use(cors());
app.use(express.json());

//connect to database



