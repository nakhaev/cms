import { Client } from './client.models';
import clients from '../mock/client.mock.js';

export const getClientList = (): Client[] => {
    return clients;
}

export const getClientById = (id: string): Client | undefined => {
    return clients.find((client) => client.id == id);
}

export const getClientsByAccount = (id: string): Client[] | undefined => {
    return clients.filter((client) => client.accountId === id);
}