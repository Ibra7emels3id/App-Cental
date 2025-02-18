const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://ibra7emdev:2jC3fTQgxdJ7obtQ@cluster0-shard-00-00.xxtws.mongodb.net:27017,cluster0-shard-00-01.xxtws.mongodb.net:27017,cluster0-shard-00-02.xxtws.mongodb.net:27017/?ssl=true&replicaSet=atlas-29rrn9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;