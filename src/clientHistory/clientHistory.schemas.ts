import mongoose from "mongoose";

export class ClientHistory {
    id!: string;
    description?: string;
    departmentId!: string;
    userId!: string;
    accountId!: string;
    clientId!: string;
    date!: string;
}

const clientHistorySchema = new mongoose.Schema({
    description: {
        type: String,
        required: false,
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, { 
    timestamps: true 
});

export const ClientHistoryModel = mongoose.model('ClientHistory', clientHistorySchema);