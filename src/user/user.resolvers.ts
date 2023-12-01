import * as userService from './user.service.js';
import * as departmentService from '../department/department.service.js';
import * as clientService from '../client/client.service.js';

const userResolvers = {
    Query: {
        users: async () => await userService.getUserList(),
        user: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            return await userService.getUserById(_id);
        },
    },
    User: {
        departments: async (parent: any, args: any, context: any, info: any) => {
            const { departments } = parent;
            return await departmentService.getDepartmentsByListOfId(departments);
        },
        clients: async (parent: any, args: any, context: any, info: any) => {
            const { clients } = parent;
            return await clientService.getClientsByListOfId(clients);
        },
    },
    Mutation: {
        createUser: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await userService.createUser(input);
        },
        updateUser: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { _id } = input;
            if (!_id) {
                throw new Error('User _id is required');
            }
            return await userService.updateUser(input);
        },
        deleteUser: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            if (!_id) {
                throw new Error('User _id is required');
            }
            return await userService.deleteUser(_id);
        }
    },
    // Subscription: {},
};

export default userResolvers;