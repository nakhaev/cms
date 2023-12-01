import { Client, ClientModel } from './client.schemas.js';

export const getClientList = async (): Promise<Client[]> => {
    try {
        return await ClientModel.find({}) as Client[];
    } catch (error) {
        throw new Error('Get Client List Failed: ' + error);
    }
};

export const getClientById = async (_id: string): Promise<Client | null> => {
    try {
        return await ClientModel.findById(_id);
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

export const updateClient = async (_id: string, input: any): Promise<Client | null> => {
    try {
        let client = await ClientModel.findById(_id);
        if (!client) {
            throw new Error('Client not found');
        }
        await ClientModel.findByIdAndUpdate(_id, input);
        return await ClientModel.findById(_id);
    } catch (error) {
        throw new Error('Update Client Failed: ' + error);
    }
};

export const deleteClient = async (_id: string): Promise<Client | null> => {
    try {
        return await ClientModel.findByIdAndDelete(_id);
    } catch (error) {
        throw new Error('Delete Client Failed: ' + error);
    }
}

export const getClientsByAccount = async (_id: string): Promise<Client[]> => {
    try {
        return await ClientModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('Get Clients By Account Failed: ' + error);
    }
}

export const getClientsByListOfId = async (ids: string[]): Promise<Client[]> => {
    try {
        return await ClientModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('Get Clients By List Of Id Failed: ' + error);
    }
}