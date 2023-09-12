import { Department } from './department.models';
import departments from '../mock/department.mock.js';
import * as uuid from 'uuid';

export const getDepartmentList = (): Department[] => {
    return departments;
}

export const getDepartmentById = (id: string): Department | undefined => {
    return departments.find((department) => department.id == id);
}

export const getDepartmentListByIds = (ids: string[]): Department[] => {
    return departments.filter((department) => ids.includes(department.id));
}

export const createDepartment = (department: Department): Department => {
    const newDepartment = { ...department, id: uuid.v4() };
    departments.push(newDepartment);
    return newDepartment;
}