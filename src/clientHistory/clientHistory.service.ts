import { ClientHistory, ClientHistoryModel } from './clientHistory.schemas.js';

export const getClientHistoryList = async (): Promise<ClientHistory[]> => {
    try {
        return await ClientHistoryModel.find();
    } catch (error) {
        throw new Error('Get ClientHistory List Failed: ' + error);
    }
}

export const getClientHistoryById = async (id: string): Promise<ClientHistory | null> => {
    try {
        return await ClientHistoryModel.findById(id);
    } catch (error) {
        throw new Error('Get ClientHistory By Id Failed: ' + error);
    }
}

export const createClientHistory = async (input: any): Promise<ClientHistory> => {
    try {
        return (await ClientHistoryModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create ClientHistory Failed: ' + error);
    }
}

export const updateClientHistory = async (id: string, input: any): Promise<ClientHistory | null> => {
    try {
        const clientHistory = await ClientHistoryModel.findById(id);
        if (!clientHistory) {
            throw new Error('ClientHistory not found!');
        }
        await ClientHistoryModel.findByIdAndUpdate(id, input);
        return await ClientHistoryModel.findById(id);
    } catch (error) {
        throw new Error('Update ClientHistory Failed: ' + error);
    }
}

export const deleteClientHistory = async (id: string): Promise<ClientHistory | null> => {
    try {
        return await ClientHistoryModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Delete ClientHistory Failed: ' + error);
    }
}

export const getClientHistoryByAccount = async (id: string): Promise<ClientHistory[]> => {
    try {
        return await ClientHistoryModel.find({ accountId: id });
    } catch (error) {
        throw new Error('Get ClientHistories By Account Failed: ' + error);
    }
}