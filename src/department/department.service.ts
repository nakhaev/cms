import { DepartmentModel, Department } from "./department.schemas.js";

export const getDepartmentList = async (): Promise<Department[]> => {
    try {
        return await DepartmentModel.find();
    } catch (error) {
        throw new Error('Get Department List Failed: ' + error);
    }
}

export const getDepartmentById = async (id: string): Promise<Department | null> => {
    try {
        return await DepartmentModel.findById(id);
    } catch (error) {
        throw new Error('Get Department By Id Failed: ' + error);
    }
}

export const createDepartment = async (input: any): Promise<Department> => {
    try {
        return (await DepartmentModel.create(input)).toObject();
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}

export const updateDepartment = async (id: string, input: any): Promise<Department | null> => {
    try {
        const department = await DepartmentModel.findById(id);
        if (!department) {
            throw new Error('Department not found!');
        }
        await DepartmentModel.findByIdAndUpdate(id, input);
        return await DepartmentModel.findById(id);
    } catch (error) {
        throw new Error('Update Department Failed: ' + error);
    }
}

export const deleteDepartment = async (id: string): Promise<Department | null> => {
    try {
        return await DepartmentModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Delete Department Failed: ' + error);
    }
}

export const getDepartmentsByAccount = async (id: string): Promise<Department[]> => {
    try {
        return await DepartmentModel.find({ accountId: id });
    } catch (error) {
        throw new Error('Get Departments By Account Failed: ' + error);
    }
}