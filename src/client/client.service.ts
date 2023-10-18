import { Client, ClientModel } from './client.schemas.js';

export const getClientList = async (): Promise<Client[]> => {
    try {
        return await ClientModel.find({}) as Client[];
    } catch (error) {
        throw new Error('Get Client List Failed: ' + error);
    }
};

export const getClientById = async (id: string): Promise<Client | null> => {
    try {
        return await ClientModel.findById(id);
    } catch (error) {
        throw new Error('Get Client By Id Failed: ' + error);
    }
};

export const createClient = async (input: any): Promise<Client> => {
    try {
        return (await ClientModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create Client Failed: ' + error);
    }
};

export const updateClient = async (id: string, input: any): Promise<Client | null> => {
    try {
        let client = await ClientModel.findById(id);
        if (!client) {
            throw new Error('Client not found');
        }
        await ClientModel.findByIdAndUpdate(id, input);
        return await ClientModel.findById(id);
    } catch (error) {
        throw new Error('Update Client Failed: ' + error);
    }
};

export const deleteClient = async (id: string): Promise<Client | null> => {
    try {
        return await ClientModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Delete Client Failed: ' + error);
    }
}

export const getClientsByAccount = async (id: string): Promise<Client[]> => {
    try {
        return await ClientModel.find({ accountId: id });
    } catch (error) {
        throw new Error('Get Clients By Account Failed: ' + error);
    }
}