import * as departmentService from './department.service.js';
import * as clientService from '../client/client.service.js';
import * as userService from '../user/user.service.js';

const departmentResolvers = {
    Query: {
        departments: async () => await departmentService.getDepartmentList(),
        department: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            return await departmentService.getDepartmentById(_id);
        }
    },
    Department: {
        users: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await userService.getUsersByListOfId(_id);
        },
        clients: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await clientService.getClientsByListOfId(_id);
        },
    },
    Mutation: {
        createDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await departmentService.createDepartment(input);
        },
        updateDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { _id } = input;
            if (!_id) {
                throw new Error('Department _id is required');
            }
            return await departmentService.updateDepartment(input);
        },
        deleteDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            if (!_id) {
                throw new Error('Department _id is required');
            }
            return await departmentService.deleteDepartment(_id);
        }
    },
    // Subscription: {},
};

export default departmentResolvers;