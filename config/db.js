import mongoose from 'mongoose';
import dotenv from 'dotenv';


const MONGO_URI = "mongodb+srv://palvid1941_db_user:eEBhShIDAbh3Q9mX@cluster0.g6epd9x.mongodb.net/?appName=Cluster0";

const connectDB = async () => {

    try {
        await mongoose.connect(MONGO_URI);
         console.log('MongoDB connected');
         } catch (err) {
         console.error('MongoDB connection error:', err);
         process.exit(1);
    }
  }
export default connectDB;