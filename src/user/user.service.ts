import { User } from './user.models';
import users from '../mock/user.mock.js';

export const getUserList = (): User[] => {
    return users;
};

export const getUserById = (id: string): User | undefined => {
    return users.find((user) => user.id == id);
};

export const getUsersByAccount = (id: string): User[] | undefined => {
    return users.filter((user) => user.accountId === id);
};

export const getUserListByIds = (ids: string[]): User[] => {
    return users.filter((user) => ids.includes(user.id));
};