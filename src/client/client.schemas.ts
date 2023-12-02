import mongoose from "mongoose";
import { AccountModel } from "../account/account.schemas.js";
import { UserModel } from "../user/user.schemas.js";
import { DepartmentModel } from "../department/department.schemas.js";

export class Client {
    _id!: mongoose.Schema.Types.ObjectId;
    name?: string;
    email?: string;
    status?: string;
    phone?: string;
    accountId!: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    emails?: string[];
    phones?: string[];
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
        type: mongoose.Schema.Types.ObjectId,
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

export const ClientModel = mongoose.model('Client', accountSchema);