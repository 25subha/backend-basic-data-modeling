import mongoose from "mongoose";

const medicalRecordSehema = new mongoose.Schema({}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSehema);