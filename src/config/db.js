import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;


