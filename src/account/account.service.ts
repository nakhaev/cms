import { Account, AccountModel } from './account.schemas.js';

export const getAccountList = async (): Promise<Account[]> =>  {
    try {
        return await AccountModel.find();
    } catch (error) {
        throw new Error('Get Account List Failed: ' + error);
    }
}

export const getAccountById = async (_id: string): Promise<Account | null> => {
    try {
        return await AccountModel.findById(_id);
    } catch (error) {
        throw new Error('Get Account By Id Failed: ' + error);
    }
}

export const createAccount = async (input: any): Promise<Account> => {
    try {
        return (await AccountModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create Account Failed: ' + error);
    }
}

export const updateAccount = async (_id: string, input: any): Promise<Account | null> => {
    try {
        let account = await AccountModel.findById(_id);
        if (!account) {
            throw new Error('Account Not Found');
        }
        await AccountModel.findByIdAndUpdate(_id, input);
        return await AccountModel.findById(_id);
    } catch (error) {
        throw new Error('Update Account Failed: ' + error);
    }
}

export const deleteAccount = async (_id: string): Promise<Account | null> => {
    try {
        return await AccountModel.findByIdAndDelete(_id);
    } catch (error) {
        throw new Error('Delete Account Failed: ' + error);
    }
}