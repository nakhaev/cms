import { ClientHistory, ClientHistoryModel } from './clientHistory.schemas.js';

export const getClientHistoryList = async (): Promise<ClientHistory[]> => {
    try {
        return await ClientHistoryModel.find();
    } catch (error) {
        throw new Error('[ClientHistory Service] Get ClientHistory List Failed: ' + error);
    }
}

export const getClientHistoryById = async (_id: string): Promise<ClientHistory | null> => {
    try {
        return await ClientHistoryModel.findById(_id);
    } catch (error) {
        throw new Error('[ClientHistory Service] Get ClientHistory By Id Failed: ' + error);
    }
}

export const createClientHistory = async (input: any): Promise<ClientHistory> => {
    try {
        return (await ClientHistoryModel.create(input)).toObject();
    } catch (error) {
        throw new Error('[ClientHistory Service] Create ClientHistory Failed: ' + error);
    }
}

export const updateClientHistory = async (_id: string, input: any): Promise<ClientHistory | null> => {
    try {
        const clientHistory = await ClientHistoryModel.findById(_id);
        if (!clientHistory) {
            throw new Error('[ClientHistory Service] ClientHistory not found!');
        }
        await ClientHistoryModel.findByIdAndUpdate(_id, input);
        return await ClientHistoryModel.findById(_id);
    } catch (error) {
        throw new Error('[ClientHistory Service] Update ClientHistory Failed: ' + error);
    }
}

export const deleteClientHistory = async (_id: string): Promise<ClientHistory | null> => {
    try {
        return await ClientHistoryModel.findByIdAndDelete(_id);
    } catch (error) {
        throw new Error('[ClientHistory Service] Delete ClientHistory Failed: ' + error);
    }
}

export const getClientHistoryByAccount = async (_id: string): Promise<ClientHistory[]> => {
    try {
        return await ClientHistoryModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('[ClientHistory Service] Get ClientHistories By Account Failed: ' + error);
    }
}