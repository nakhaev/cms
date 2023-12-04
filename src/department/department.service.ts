import mongoose from "mongoose";
import { Client } from "../client/client.schemas.js";
import { DepartmentModel, Department } from "./department.schemas.js";
import { User } from "../user/user.schemas.js";
import * as userService from "../user/user.service.js";
import * as clientService from "../client/client.service.js";

export const getDepartmentList = async (): Promise<Department[]> => {
    try {
        return await DepartmentModel.find();
    } catch (error) {
        throw new Error('[Department Service] Get Department List Failed: ' + error);
    }
}

export const getDepartmentById = async (_id: string): Promise<Department | null> => {
    try {
        return await DepartmentModel.findById(_id);
    } catch (error) {
        throw new Error('[Department Service] Get Department By Id Failed: ' + error);
    }
}

export const createDepartment = async (input: any): Promise<Department> => {
    try {
        const result = await DepartmentModel.create(input);
        // check and update clients with department
        await clientService.checkAndUpdateDepartments(result.toObject());
        // check and update users with department
        await userService.checkAndUpdateDepartments(result.toObject());
        return result.toObject();
    } catch (error) {
        throw new Error('[Department Service] Create Department Failed: ' + error);
    }
}

export const updateDepartment = async (input: any): Promise<Department | null> => {
    try {
        const { _id } = input;
        const department = await DepartmentModel.findById(_id);
        if (!department) {
            throw new Error('[Department Service] Department not found!');
        }
        await DepartmentModel.findByIdAndUpdate(_id, input);
        const result = await DepartmentModel.findById(_id) as Department;
        // check and update clients with department
        await clientService.checkAndUpdateDepartments(result);
        // check and update users with department
        await userService.checkAndUpdateDepartments(result);
        return result;
    } catch (error) {
        throw new Error('[Department Service] Update Department Failed: ' + error);
    }
}

export const deleteDepartment = async (_id: string): Promise<Department | null> => {
    try {
        const result = await DepartmentModel.findByIdAndDelete(_id) as Department;
        // check and update clients with department
        await clientService.checkAndUpdateDepartments(result, true);
        // check and update users with department
        await userService.checkAndUpdateDepartments(result, true);
        return result;
    } catch (error) {
        throw new Error('[Department Service] Delete Department Failed: ' + error);
    }
}

export const getDepartmentsByAccount = async (_id: string): Promise<Department[]> => {
    try {
        return await DepartmentModel.find({ accountId: _id });
    } catch (error) {
        throw new Error('[Department Service] Get Departments By Account Failed: ' + error);
    }
}

export const getDepartmentsByListOfId = async (ids: mongoose.Types.ObjectId[]): Promise<Department[]> => {
    try {
        return await DepartmentModel.find({ _id: { $in: ids } });
    } catch (error) {
        throw new Error('[Department Service] Get Departments By List Of Id Failed: ' + error);
    }
}

export const checkAndUpdateClients = async (client: Client, remove: boolean = false): Promise<void> => {
    const { _id: clientId, departments: departmentIds } = client;
    try {
        // find departments by client and remove client from departments
        const departmentsByClient = await DepartmentModel.find({ $expr: { $in: [clientId, '$clients'] } });
        for (const department of departmentsByClient) {
            department.clients = department.clients?.filter(id => id.toString() !== clientId.toString());
            await DepartmentModel.findByIdAndUpdate(department._id, department);
        }

        if (remove)  return;

        // find departments by list of departmentIds and add client to departments
        const departments = await getDepartmentsByListOfId(departmentIds);
        for (const department of departments) {
            if (!department.clients?.includes(clientId)) {
                department.clients?.push(clientId);
                await DepartmentModel.findByIdAndUpdate(department._id, department);
            }
        }
    } catch (error) {
        throw new Error('[Department Service] Check And Update Clients Failed: ' + error);
    }
}

export const checkAndUpdateUsers = async (user: User, remove: boolean = false): Promise<void> => {
    const { _id: userId, departments: departmentIds } = user;
    try {
        // find departments by user and remove user from departments
        const departmentsByUser = await DepartmentModel.find({ $expr: { $in: [userId, '$users'] } });
        for (const department of departmentsByUser) {
            department.users = department.users?.filter(id => id.toString() !== userId.toString());
            await DepartmentModel.findByIdAndUpdate(department._id, department);
        }

        if (remove)  return;
        
        // find departments by list of departmentIds and add user to departments
        const departments = await getDepartmentsByListOfId(departmentIds);
        for (const department of departments) {
            if (!department.users?.includes(userId)) {
                department.users?.push(userId);
                await DepartmentModel.findByIdAndUpdate(department._id, department);
            }
        }
    } catch (error) {
        throw new Error('[Department Service] Check And Update Clients Failed: ' + error);
    }
}