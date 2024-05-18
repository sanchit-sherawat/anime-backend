// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  data: string;

}

const dataSchema: Schema = new mongoose.Schema({
    data: { type: String, required: true},
});

export default mongoose.model<IData>('data', dataSchema);
