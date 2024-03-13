// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAnimeSeries extends Document {
  animename: string;
  description: string;
  count: string;
  server:string;
  language:string;
  scries: { name: string; url: string }[];
}

const animeSeriesSchema: Schema = new mongoose.Schema({
  animename: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: String, required: true },
  server:{type:String,require:true},
  language:{type:String,require:true},
  scries: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

export default mongoose.model<IAnimeSeries>('AnimeSeries', animeSeriesSchema);
