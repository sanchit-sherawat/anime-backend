// app.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Use routes
app.use('/auth', authRoutes);
// Use routes
app.use('/users', userRoutes);

app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


