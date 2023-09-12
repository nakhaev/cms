import { Department } from './department.models';
import departments from '../mock/department.mock.js';

export const getDepartmentList = (): Department[] => {
    return departments;
}

export const getDepartmentById = (id: string): Department | undefined => {
    return departments.find((department) => department.id == id);
}