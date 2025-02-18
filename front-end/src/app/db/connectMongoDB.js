import mongoose from "mongoose";

export const connectDB = async () => {
    // Connect to MongoDB
    try {
        await mongoose.connect('mongodb://ibra7emdev:2jC3fTQgxdJ7obtQ@cluster0-shard-00-00.xxtws.mongodb.net:27017,cluster0-shard-00-01.xxtws.mongodb.net:27017,cluster0-shard-00-02.xxtws.mongodb.net:27017/?ssl=true&replicaSet=atlas-29rrn9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("ERROR WITH CONNECTING  MongoDB", error);
    }
}
