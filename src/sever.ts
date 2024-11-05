import cors from "cors";

import express from "express";

import { app } from './app';
import AnimeCard from "./routes/animeCardRoutes";

import AnimeSeries from "./routes/animeSeriesRoutes";


import authRoutes from "./routes/authRoutes";

import userRoutes from "./routes/userRoutes";


export function newFunction() {
  app.use(cors());
  app.use(express.json());
  // coment foe the card and api end ponts for the connection 
  app.use('/card', AnimeCard);
  app.use('/api', AnimeSeries);


  // Use routes
  app.use('/auth', authRoutes);
  // app.use()
  // Use routes
  app.use('/users', userRoutes);
}
