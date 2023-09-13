import { User } from './user.models';
import users from '../mock/user.mock.js';
import { userModel } from './user.schemas.js';

export const getUserList = async (): Promise<User[]> => {
    try {
        const users = await userModel.find({});
        return users;
    } catch (error) {  
        throw new Error('Get User List Failed: ' + error);
    }
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

export const createUser = async (input: any): Promise<User> => {
    try {
        const user = await userModel.create(input);
        return user;
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}