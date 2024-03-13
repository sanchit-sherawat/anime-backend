// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAnimeCard extends Document {
  animename: string;
  description: string;
  totalEpisode: string;
  posterURL: string;

}

const animeCardSchema: Schema = new mongoose.Schema({
    animename: { type: String, required: true},
    description: { type: String, required: true},
    totalEpisode: { type: String, required: true },
    posterURL: { type: String, required: true },

});

export default mongoose.model<IAnimeCard>('AnimeCard', animeCardSchema);
