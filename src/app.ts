// app.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import AnimeCard from './routes/animeCardRoutes';
import AnimeSeries from './routes/animeSeriesRoutes';
import cors from "cors"
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors())
app.use(express.json());
app.use('/card',AnimeCard)
app.use('/api', AnimeSeries);


// Use routes
app.use('/auth', authRoutes);
// app.use()
// Use routes
app.use('/users', userRoutes);

app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


