import { Account } from './account.models';
import accounts from '../mock/account.mock.js';

export const getAccountList = (): Account[] => {
    return accounts;
}

export const getAccountById = (id: string): Account | undefined => {
    return accounts.find((account) => account.id == id);
}