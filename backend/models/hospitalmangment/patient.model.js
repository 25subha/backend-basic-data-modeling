import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        requried: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);
