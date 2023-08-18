//connect/hookup route.js
import mongoose from "mongoose";

let isConnected = false; //track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already Connected');
        return;
    }
    try {
        await mongoose.connect(proccess.env.MONGODB_URI, {
            dbName: 'exchange_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB Connected')

    } catch (error) {
        console.log(error);
    }
}