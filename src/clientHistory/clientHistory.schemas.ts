import mongoose from "mongoose";
import { ClientModel } from "../client/client.schemas.js";
import { AccountModel } from "../account/account.schemas.js";
import { UserModel } from "../user/user.schemas.js";
import { DepartmentModel } from "../department/department.schemas.js";

export class ClientHistory {
    _id!: mongoose.Schema.Types.ObjectId;
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
        validate: {
            validator: async (v: any) => {
                return (await DepartmentModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Department with Id ${v.value} doesn't exist`;
            }
        },
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async (v: any) => {
                return (await UserModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `User with Id ${v.value} doesn't exist`;
            }
        },
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
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
        validate: {
            validator: async (v: any) => {
                return (await ClientModel.findById(v))?.toObject() ? true : false;
            },
            message: (v: any) => {
                return `Client with Id ${v.value} doesn't exist`;
            }
        },
    },
    date: {
        type: Date,
        required: true,
    }
}, { 
    timestamps: true 
});

export const ClientHistoryModel = mongoose.model('ClientHistory', clientHistorySchema);