import mongoose from "mongoose";

export class User {
    id?: mongoose.Schema.Types.ObjectId;
    name?: string;
    email?: string;
    status?: string;
    role?: string;
    accountId!: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    }
}, { 
    timestamps: true 
});

export const UserModel = mongoose.model('User', UserSchema);