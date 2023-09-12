import * as clientService from './client.service.js'
import * as departmentService from '../department/department.service.js'
import * as userService from '../user/user.service.js'

const clientResolvers = {
    Query: {
        clients: () => clientService.getClientList(),
        client: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return clientService.getClientById(id);
        }
      },
    Client: {
        departments: (parent: any, args: any, context: any, info: any) => {
            const { departmentIds } = parent;
            return departmentService.getDepartmentListByIds(departmentIds);
        },
        users: (parent: any, args: any, context: any, info: any) => {
            const { userIds } = parent;
            return userService.getUserListByIds(userIds);
        }
    }
    // Mutation: {},
    // Subscription: {},
};

export default clientResolvers;