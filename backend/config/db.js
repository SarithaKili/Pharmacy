import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://saritha:saritha0325@cluster0.ryhq2.mongodb.net/Project').then(()=>console.log("DB Connected"));
   
}

