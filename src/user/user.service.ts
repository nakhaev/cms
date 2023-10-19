
import { User, UserModel } from './user.schemas.js';

export const getUserList = async (): Promise<User[]> => {
    try {
        return await UserModel.find({}) as User[];
    } catch (error) {  
        throw new Error('Get User List Failed: ' + error);
    }
};

export const getUserById = async (id: string): Promise<User | null> => {
    try {
        return await UserModel.findById(id);
    } catch (error) {
        throw new Error('Get User By Id Failed: ' + error);
    }
};

export const getUsersByAccount = async (id: string): Promise<User[]> => {
    try {
        return await UserModel.find({ accountId: id });
    } catch (error) {
        throw new Error('Get Users By Account Failed: ' + error);
    }
};

export const getUsersByListOfId = async (ids: string[]): Promise<User[]> => {
    try {
        return await UserModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('Get User List By Ids Failed: ' + error);
    }
};

export const createUser = async (input: any): Promise<User> => {
    try {
        return (await UserModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}

export const updateUser = async (input: any): Promise<User | null> => {
    try {
        const { id } = input;
        let user = await UserModel.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        await UserModel.findByIdAndUpdate(id, user);
        return await UserModel.findById(id);
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}

export const deleteUser = async (id: string): Promise<User | null> => {
    try {
        return await UserModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Delete User Failed: ' + error);
    }
}