import mongoose from "mongoose";

export class ClientHistory {
    id?: mongoose.Schema.Types.ObjectId;
    description?: string;
    departmentId!: mongoose.Schema.Types.ObjectId;
    userId!: mongoose.Schema.Types.ObjectId;
    accountId!: mongoose.Schema.Types.ObjectId;
    clientId!: mongoose.Schema.Types.ObjectId;
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