import * as departmentService from './department.service.js'
import * as userService from '../user/user.service.js'
import * as clientService from '../client/client.service.js'


const departmentResolvers = {
    Query: {
        departments: () => departmentService.getDepartmentList(),
        // account: (parent, args, context, info) => {
        department: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return departmentService.getDepartmentById(id);
        }
      },
      Department: {
        clients: (parent: any, args: any, context: any, info: any) => {
            const { clientIds } = parent;
            return clientService.getClientListByIds(clientIds);
        },
        users: (parent: any, args: any, context: any, info: any) => {
            const { userIds } = parent;
            return userService.getUserListByIds(userIds);
        }
    },
    Mutation: {
        createDepartment: (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return departmentService.createDepartment(input);
        }
    },
    // Subscription: {},
};

export default departmentResolvers;