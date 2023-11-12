import { config } from './config.js';
import { connect } from 'mongoose';

export const connectDB = async () => {
    console.log(`- - -`.repeat(10));

    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 60000,
            socketTimeoutMS: 60000,
        }

        const db = await connect(config.MONGO_URI, options);
        console.log('Connected to MongoDB :) ✅✅✅');
        console.log(`- - -`.repeat(10));
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}