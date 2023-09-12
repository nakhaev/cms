import { ClientHistory } from './clientHistory.models';
import clientHistory from '../mock/clientHistory.mock.js';

export const getClientHistoryList = (): ClientHistory[] => {
    return clientHistory;
}

export const getClientHistoryById = (id: string): ClientHistory | undefined => {
    return clientHistory.find((item) => item.id == id);
}

export const getClientHistoryByAccount = (id: string): ClientHistory[] | undefined => {
    return clientHistory.filter((item) => item.accountId === id);
}