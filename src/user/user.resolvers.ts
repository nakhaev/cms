import * as userService from './user.service.js'
import * as departmentService from '../department/department.service.js'
import * as clientService from '../client/client.service.js'

const userResolvers = {
    Query: {
        users: async () => await userService.getUserList(),
        user: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return userService.getUserById(id);
        },
      },
      User: {
        departments: (parent: any, args: any, context: any, info: any) => {
            const { departmentIds } = parent;
            return departmentService.getDepartmentListByIds(departmentIds);
        },
        clients: (parent: any, args: any, context: any, info: any) => {
            const { clientIds } = parent;
            return clientService.getClientListByIds(clientIds);
        }
      },
    Mutation: {
        createUser: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const user = await userService.createUser(input);
            return user;
        }
    },
    // Subscription: {},
};

export default userResolvers;