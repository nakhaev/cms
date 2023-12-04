
import mongoose from 'mongoose';
import { Client } from '../client/client.schemas.js';
import { User, UserModel } from './user.schemas.js';
import { Department } from '../department/department.schemas.js';
import * as clientService from '../client/client.service.js';
import * as departmentService from '../department/department.service.js';
import c from 'config';

export const getUserList = async (): Promise<User[]> => {
    try {
        return await UserModel.find({}) as User[];
    } catch (error) {  
        throw new Error('[User Service] Get User List Failed: ' + error);
    }
};

export const getUserById = async (_id: string): Promise<User | null> => {
    try {
        return await UserModel.findById(_id);
    } catch (error) {
        throw new Error('[User Service] Get User By Id Failed: ' + error);
    }
};

export const getUsersByAccount = async (_id: string): Promise<User[]> => {
    try {
        return await UserModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('[User Service] Get Users By Account Failed: ' + error);
    }
};

export const getUsersByListOfId = async (ids: mongoose.Types.ObjectId[]): Promise<User[]> => {
    try {
        return await UserModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('[User Service] Get User List By Ids Failed: ' + error);
    }
};

export const createUser = async (input: any): Promise<User> => {
    try {
        const result = await UserModel.create(input);
        // check and update clients with user
        await clientService.checkAndUpdateUsers(result.toObject());
        // check and update departments with user
        await departmentService.checkAndUpdateUsers(result.toObject());
        return result.toObject();
    } catch (error) {
        throw new Error('[User Service] Create User Failed: ' + error);
    }
}

export const updateUser = async (input: any): Promise<User | null> => {
    try {
        const { _id } = input;
        let user = await UserModel.findById(_id);
        if (!user) {
            throw new Error('[User Service] User not found');
        }

        await UserModel.findByIdAndUpdate(_id, input);
        const result =  await UserModel.findById(_id) as User;
        // check and update clients with user
        await clientService.checkAndUpdateUsers(result);
        // check and update departments with user
        await departmentService.checkAndUpdateUsers(result);
        return result;
    } catch (error) {
        throw new Error('[User Service] Create User Failed: ' + error);
    }
}

export const deleteUser = async (_id: string): Promise<User | null> => {
    try {
        const result = await UserModel.findByIdAndDelete(_id) as User;
        // check and update clients with user
        await clientService.checkAndUpdateUsers(result, true);
        // check and update departments with user
        await departmentService.checkAndUpdateUsers(result, true);
        return result;
    } catch (error) {
        throw new Error('[User Service] Delete User Failed: ' + error);
    }
}

export const checkAndUpdateClients = async (client: Client, remove: boolean = false): Promise<void> => {
    const { _id: clientId, users: userIds } = client;
    try {
        // find users by client and remove client from users
        const usersByClient = await UserModel.find({ $expr: { $in: [clientId, '$clients'] } });
        for (const user of usersByClient) {
            user.clients = user.clients?.filter(id => id.toString() !== clientId.toString());
            await UserModel.findByIdAndUpdate(user._id, user);
        }
        
        if (remove) return;

        // find users by list of userIds and add client to users
        const users = await getUsersByListOfId(userIds);
        for (const user of users) {
            if (!user.clients?.includes(clientId)) {
                user.clients?.push(clientId);
                await UserModel.findByIdAndUpdate(user._id, user);
            }
        }

    } catch (error) {
        throw new Error('[User Service] Check And Update Clients Failed: ' + error);
    }
}

export const checkAndUpdateDepartments = async (department: Department, remove: boolean = false): Promise<void> => {
    const { _id: departmentId, users: userIds } = department;
    try {
        // find users by client and remove client from users
        const usersByDepartment= await UserModel.find({ $expr: { $in: [departmentId, '$departments'] } });
        for (const user of usersByDepartment) {
            user.clients = user.clients?.filter(id => id.toString() !== departmentId.toString());
            await UserModel.findByIdAndUpdate(user._id, user);
        }
        
        if (remove) return;

        // find users by list of userIds and add client to users
        const users = await getUsersByListOfId(userIds);
        for (const user of users) {
            if (!user.clients?.includes(departmentId)) {
                user.clients?.push(departmentId);
                await UserModel.findByIdAndUpdate(user._id, user);
            }
        }
    } catch (error) {
        throw new Error('[User Service] Check And Update Clients Failed: ' + error);
    }
}