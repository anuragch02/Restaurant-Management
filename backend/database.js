import mongoose from "mongoose";

const ConnectionString = async()=>{
    try {
       mongoose.connect(process.env.Mongo_URI);
        console.log("mongodb is connected");
    } catch (error) {
        console.log("mongodb connection error",error);
    }
}
export default ConnectionString;