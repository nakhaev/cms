import { DepartmentModel, Department } from "./department.schemas.js";

export const getDepartmentList = async (): Promise<Department[]> => {
    try {
        return await DepartmentModel.find();
    } catch (error) {
        throw new Error('Get Department List Failed: ' + error);
    }
}

export const getDepartmentById = async (_id: string): Promise<Department | null> => {
    try {
        return await DepartmentModel.findById(_id);
    } catch (error) {
        throw new Error('Get Department By Id Failed: ' + error);
    }
}

export const createDepartment = async (input: any): Promise<Department> => {
    try {
        return (await DepartmentModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create Department Failed: ' + error);
    }
}

export const updateDepartment = async (_id: string, input: any): Promise<Department | null> => {
    try {
        const department = await DepartmentModel.findById(_id);
        if (!department) {
            throw new Error('Department not found!');
        }
        await DepartmentModel.findByIdAndUpdate(_id, input);
        return await DepartmentModel.findById(_id);
    } catch (error) {
        throw new Error('Update Department Failed: ' + error);
    }
}

export const deleteDepartment = async (_id: string): Promise<Department | null> => {
    try {
        return await DepartmentModel.findByIdAndDelete(_id);
    } catch (error) {
        throw new Error('Delete Department Failed: ' + error);
    }
}

export const getDepartmentsByAccount = async (_id: string): Promise<Department[]> => {
    try {
        return await DepartmentModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('Get Departments By Account Failed: ' + error);
    }
}

export const getDepartmentsByListOfId = async (ids: string[]): Promise<Department[]> => {
    try {
        return await DepartmentModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('Get Departments By List Of Id Failed: ' + error);
    }
}