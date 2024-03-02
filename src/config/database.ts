// config/database.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error:any) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
