import { User } from './user.models';
import users from '../mock/user.mock.js';

export const getUserList = (): User[] => {
    return users;
}

export const getUserById = (id: string): User | undefined => {
    return users.find((user) => user.id == id);
}