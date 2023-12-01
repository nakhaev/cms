import mongoose from "mongoose";

export class Account {
    _id!: mongoose.Schema.Types.ObjectId;
    title?: string;
    email?: string;
    status?: string;
    phone?: string;
}

const accountSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        required: true,
    }
}, { 
    timestamps: true 
});

export const AccountModel = mongoose.model('Account', accountSchema);
