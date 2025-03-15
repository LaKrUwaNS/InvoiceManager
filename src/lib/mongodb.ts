import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI as string;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};

export default connectToDatabase;