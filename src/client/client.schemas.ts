import mongoose from "mongoose";

export class Client {
    id?: mongoose.Schema.Types.ObjectId;
    name?: string;
    email?: string;
    status?: string;
    phone?: string;
    accountId!: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const accountSchema = new mongoose.Schema({
    name: {
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
    phone: {
        type: String,
        required: true,
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    }],
}, { 
    timestamps: true 
});

export const ClientModel = mongoose.model('Client', accountSchema);