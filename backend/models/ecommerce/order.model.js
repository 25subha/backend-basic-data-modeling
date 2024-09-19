import mongoose from "mongoose";
import { Product } from "./product.model";

const orderItemSchema = mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quintity:{
        type: Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending","Canciled","Delivered"],
        default: "Pending"
    }
}, { timestamps: true});

export const Order = mongoose.model("Order", orderSchema);