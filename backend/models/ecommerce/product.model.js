import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true
    },
    ProductImage:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);