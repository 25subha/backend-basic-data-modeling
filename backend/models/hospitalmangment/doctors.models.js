import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    salary: {
        type: Number,
        requried: true
    },
    qualification: {
        type: String,
        requried: true
    },
    exprienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);