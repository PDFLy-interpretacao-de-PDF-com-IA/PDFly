import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import Groq from "groq-sdk";
import path from 'path';

dotenv.config();

export const upload = multer({dest: "uploads/"});

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const app = express();

app.use(express.json());
app.use(express.static(path.resolve('../public')));