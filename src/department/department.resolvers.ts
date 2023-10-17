import * as departmentService from './department.service.js';

const departmentResolvers = {
    Query: {
        departments: async () => await departmentService.getDepartmentList(),
        // account: (parent, args, context, info) => {
        department: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await departmentService.getDepartmentById(id);
        }
      },
    Mutation: {
        createDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await departmentService.createDepartment(input);
        },
        updateDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { id } = input;
            if (!id) {
                throw new Error('Department id is required');
            }
            return await departmentService.updateDepartment(id, input);
        },
        deleteDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            if (!id) {
                throw new Error('Department id is required');
            }
            return await departmentService.deleteDepartment(id);
        }
    },
    // Subscription: {},
};

export default departmentResolvers;