import mongoose from "mongoose";
import { ClientModel } from "../client/client.schemas.js";
import { DepartmentModel } from "../department/department.schemas.js";
import { AccountModel } from "../account/account.schemas.js";

export class User {
    _id!: mongoose.Schema.Types.ObjectId;
    name?: string;
    email?: string;
    status?: string;
    role?: string;
    phone?: string;
    accountId!: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    departments?: mongoose.Schema.Types.ObjectId[];
    clients?: mongoose.Schema.Types.ObjectId[];
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
    phone: {
        type: String,
        required: true,
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
        validate: {
            validator: async (v: any) => {
                return (await AccountModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Account with Id ${v.value} doesn't exist`;
            }
        },
    },
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        validate: {
            validator: async (v: any) => {
                return (await DepartmentModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Department with Id ${v.value} doesn't exist`;
            }
        },
    }],
    clients: [{ 
        type: mongoose.Schema.Types.ObjectId,
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
}, { 
    timestamps: true 
});

export const UserModel = mongoose.model('User', UserSchema);