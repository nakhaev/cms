import * as clientService from './client.service.js';
import * as userService from '../user/user.service.js';
import * as departmentService from '../department/department.service.js';

const clientResolvers = {
    Query: {
        clients: () => clientService.getClientList(),
        client: (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            return clientService.getClientById(_id);
        }
    },
    Client: {
        users: (parent: any, args: any, context: any, info: any) => {
            const { users } = parent;
            return userService.getUsersByListOfId(users);
        },
        departments: (parent: any, args: any, context: any, info: any) => {
            const { departments } = parent;
            return departmentService.getDepartmentsByListOfId(departments);
        },
    },
    Mutation: {
        createClient: (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return clientService.createClient(input);
        },
        updateClient: (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { _id } = input;
            return clientService.updateClient(input);
        },
        deleteClient: (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            return clientService.deleteClient(_id);
        }
    },
    // Subscription: {},
};

export default clientResolvers;