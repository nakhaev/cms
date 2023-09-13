import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true,
    },
    departmentIds: [{
        type: String,
    }],
    clientIds: [{
        type: String,
    }],
    createdAt: Date,
    updatedAt: Date
});

export const userModel = mongoose.model('User', userSchema);