import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    addressLine1: {
        type: String,
        requried: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        requried: true
    },
    pin: {
        type: String,
        requried: true
    },
    state: {
        type: String,
        requried: true
    },
    specialzedIn: [
       { type: String

       },
    ],
}, {timestamps});

export const Hospital = mongoose.model("Hospital", hospitalSchema);