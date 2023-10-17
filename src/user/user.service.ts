
import { User, userModel } from './user.schemas.js';

export const getUserList = async (): Promise<User[]> => {
    try {
        return await userModel.find({}) as User[];
    } catch (error) {  
        throw new Error('Get User List Failed: ' + error);
    }
};

export const getUserById = async (id: string): Promise<User | null> => {
try {
        return await userModel.findById(id);
    } catch (error) {
        throw new Error('Get User By Id Failed: ' + error);
    }
};

export const getUsersByAccount = async (id: string): Promise<User[]> => {
    try {
        return await userModel.find({ accountId: id });
    } catch (error) {
        throw new Error('Get Users By Account Failed: ' + error);
    }
};

export const getUserListByIds = async (ids: string[]): Promise<User[]> => {
    try {
        return await userModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('Get User List By Ids Failed: ' + error);
    }
};

export const createUser = async (input: any): Promise<User> => {
    try {
        return (await userModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}

export const updateUser = async (input: any): Promise<User | null> => {
    try {
        const { id } = input;
        let user = await userModel.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        user.name = input.name || user.name;
        user.email = input.email || user.email;
        user.role = input.role || user.role;
        user.status = input.status || user.status;
        user.accountId = input.accountId || user.accountId;
        user.password = input.password || user.password;
        user.updatedAt = new Date();

        await userModel.updateOne({ _id: id }, user);
        return await userModel.findById(id);
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}

export const deleteUser = async (id: string): Promise<User | null> => {
    try {
        return await userModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Delete User Failed: ' + error);
    }
}