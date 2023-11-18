import mongoose, { Mongoose } from "mongoose";
const productModel = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
});
export const Product = Mongoose.models.products || mongoose.model("Products",productModel);