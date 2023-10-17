import * as departmentService from './department.service.js'
import * as userService from '../user/user.service.js'
import * as clientService from '../client/client.service.js'


const departmentResolvers = {
    Query: {
        departments: async () => await departmentService.getDepartmentList(),
        // account: (parent, args, context, info) => {
        department: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await departmentService.getDepartmentById(id);
        }
      },
      Department: {
        clients: async (parent: any, args: any, context: any, info: any) => {
            const { clientIds } = parent;
            return await clientService.getClientListByIds(clientIds);
        },
        users: async (parent: any, args: any, context: any, info: any) => {
            const { userIds } = parent;
            return await userService.getUserListByIds(userIds);
        }
    },
    Mutation: {
        createDepartment: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await departmentService.createDepartment(input);
        }
    },
    // Subscription: {},
};

export default departmentResolvers;