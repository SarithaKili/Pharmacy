import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://saritha:Pharmacy1999int#KS0325@cluster0.6ijb5.mongodb.net/Pharmacy').then(()=>console.log("DB Connected"));
   
}

