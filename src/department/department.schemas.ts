import mongoose from "mongoose";

export class Department {
    id?: string;
    title?: string;
    email?: string;
    status?: string;
    address?: string;
    phone?: string;
    // users: string[] = [];
}

const departmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { 
    timestamps: true 
});

export const departmentModel = mongoose.model('Department', departmentSchema);