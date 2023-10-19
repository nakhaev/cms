import mongoose from "mongoose";

export class Department {
    id?: string;
    title?: string;
    email?: string;
    status?: string;
    address?: string;
    phone?: string;
    accountId!: string;
}

const DepartmentSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    clients: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }],
}, { 
    timestamps: true 
});

export const DepartmentModel = mongoose.model('Department', DepartmentSchema);