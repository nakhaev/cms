import { Client, ClientModel } from './client.schemas.js';
import * as userService from '../user/user.service.js';
import * as departmentService from '../department/department.service.js';
import { User } from '../user/user.schemas.js';
import mongoose from 'mongoose';
import { Department } from '../department/department.schemas.js';
import c from 'config';

export const getClientList = async (): Promise<Client[]> => {
    try {
        return await ClientModel.find({}) as Client[];
    } catch (error) {
        throw new Error('[Client Service] Get Client List Failed: ' + error);
    }
};

export const getClientById = async (_id: string): Promise<Client | null> => {
    try {
        return await ClientModel.findById(_id);
    } catch (error) {
        throw new Error('[Client Service] Get Client By Id Failed: ' + error);
    }
};

export const createClient = async (input: any): Promise<Client> => {
    try {
        // create client
        const result = await ClientModel.create(input);
        // check and update user with client
        await userService.checkAndUpdateClients(result.toObject());
        // check and update department with client
        await departmentService.checkAndUpdateClients(result.toObject());
        // return client
        return result.toObject();
    } catch (error) {
        throw new Error('[Client Service] Create Client Failed: ' + error);
    }
};

export const updateClient = async (input: any): Promise<Client | null> => {
    const { _id } = input;
    try {
        let client = await ClientModel.findById(_id);
        if (!client) {
            throw new Error('[Client Service] Client not found');
        }
        // update client
        await ClientModel.findByIdAndUpdate(_id, input);
        // get updated client
        const result = await ClientModel.findById(_id) as Client;
        // check and update user with client
        await userService.checkAndUpdateClients(result);
        // check and update department with client
        await departmentService.checkAndUpdateClients(result);
        return result;
    } catch (error) {
        throw new Error('[Client Service] Update Client Failed: ' + error);
    }
};

export const deleteClient = async (_id: string): Promise<Client | null> => {
    try {
        const result = await ClientModel.findByIdAndDelete(_id);
        // check and update user with client
        await userService.checkAndUpdateClients(result?.toObject() as Client, true);
        // check and update department with client
        await departmentService.checkAndUpdateClients(result?.toObject() as Client, true);
        return result?.toObject() as Client;
    } catch (error) {
        throw new Error('[Client Service] Delete Client Failed: ' + error);
    }
}

export const getClientsByAccount = async (_id: string): Promise<Client[]> => {
    try {
        return await ClientModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('[Client Service] Get Clients By Account Failed: ' + error);
    }
}

export const getClientsByListOfId = async (ids: mongoose.Types.ObjectId[]): Promise<Client[]> => {
    try {
        return await ClientModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('[Client Service] Get Clients By List Of Id Failed: ' + error);
    }
}

export const checkAndUpdateUsers = async (user: User, remove: boolean = false): Promise<void> => {
    const { _id: userId, clients: clientIds } = user;
    try {
        // find clients by user and remove user from clients
        const clientsByUser = await ClientModel.find({ $expr: { $in: [userId, '$users'] } });
        for (const client of clientsByUser) {
            client.users = client.users?.filter(id => id.toString() !== userId.toString());
            await ClientModel.findByIdAndUpdate(client._id, client);
        }

        if (remove)  return;
        
        // find clients by list of departmentIds and add user to clients
        const clients = await getClientsByListOfId(clientIds);
        for (const client of clients) {
            if (!client.users?.includes(userId)) {
                client.users?.push(userId);
                await ClientModel.findByIdAndUpdate(client._id, client);
            }
        }
    } catch (error) {
        throw new Error('[Client Service] Check And Update Users Failed: ' + error);
    }
}

export const checkAndUpdateDepartments = async (department: Department, remove: boolean = false): Promise<void> => {
    const { _id: departmentId, clients: clientIds } = department;
    try {
        // find clients by department and remove department from clients
        const clientsByDepartment= await ClientModel.find({ $expr: { $in: [departmentId, '$departments'] } });
        for (const client of clientsByDepartment) {
            client.departments = client.departments?.filter(id => id.toString() !== departmentId.toString());
            await ClientModel.findByIdAndUpdate(client._id, client);
        }
        
        if (remove) return;

        // find clients by list of clientsIds and add department to clients
        const clients = await getClientsByListOfId(clientIds);
        for (const client of clients) {
            if (!client.departments?.includes(departmentId)) {
                client.departments?.push(departmentId);
                await ClientModel.findByIdAndUpdate(client._id, client);
            }
        }
    } catch (error) {
        throw new Error('[Client Service] Check And Update Departments Failed: ' + error);
    }
}