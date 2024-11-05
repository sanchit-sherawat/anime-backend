// app.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import { newFunction } from './sever';
dotenv.config();

connectDB();

export const app = express();
const port = process.env.PORT || 3001;

// Middleware
newFunction();

app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




