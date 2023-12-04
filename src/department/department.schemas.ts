import mongoose from "mongoose";
import { AccountModel } from "../account/account.schemas.js";
import { UserModel } from "../user/user.schemas.js";
import { ClientModel } from "../client/client.schemas.js";

export class Department {
    _id!: mongoose.Types.ObjectId;
    title?: string;
    email?: string;
    status?: string;
    address?: string;
    phone?: string;
    accountId!: mongoose.Types.ObjectId;
    users!: mongoose.Types.ObjectId[];
    clients!: mongoose.Types.ObjectId[];
    emails?: string[];
    phones?: string[];
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
        type: mongoose.Types.ObjectId,
        ref: 'Account',
        validate: {
            validator: async (v: any) => {
                return (await AccountModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Account with Id ${v.value} doesn't exist`;
            }
        },
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        validate: {
            validator: async (v: any) => {
                return (await UserModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `User with Id ${v.value} doesn't exist`;
            }
        },
    }],
    clients: [{ 
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        validate: {
            validator: async (v: any) => {
                return (await ClientModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Client with Id ${v.value} doesn't exist`;
            }
        },
    }],
    emails: {
        type: [String],
        required: false,
    },
    phones: {
        type: [String],
        required: false,
    },
}, { 
    timestamps: true 
});

export const DepartmentModel = mongoose.model('Department', DepartmentSchema);