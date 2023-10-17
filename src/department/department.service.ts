import { departmentModel, Department } from "./department.schemas.js";

export const getDepartmentList = async (): Promise<Department[]> => {
    return await departmentModel.find({});
}

export const getDepartmentById = async (id: string): Promise<Department | null> => {
    return await departmentModel.findById(id);
}

export const getDepartmentListByIds = async (ids: string[]): Promise<Department[]> => {
    return await departmentModel.find({ _id: { $in: ids } });
}

export const createDepartment = async (input: any): Promise<Department> => {
    try {
        return await departmentModel.create(input);
    } catch (error) {
        throw new Error('Create User Failed: ' + error);
    }
}