import * as accountService from './account.service.js';
import * as userService from '../user/user.service.js';
import * as clientService from '../client/client.service.js';
import * as departmentService from '../department/department.service.js';
import * as clientHistoryService from '../clientHistory/clientHistory.service.js';


const accountResolvers = {
    Query: {
        accounts: async () => await accountService.getAccountList(),
        // account: (parent, args, context, info) => {
        account: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await accountService.getAccountById(id);
        }
    },
    Account: {
        users: async (parent: any, args: any, context: any, info: any) => {
            const { id } = parent;
            return await userService.getUsersByAccount(id);
        },
        departments: async (parent: any, args: any, context: any, info: any) => {
            const { id } = parent;
            return await departmentService.getDepartmentsByAccount(id);
        },
        clients: async (parent: any, args: any, context: any, info: any) => {
            const { id } = parent;
            return await clientService.getClientsByAccount(id);
        },
        clientHistory: async (parent: any, args: any, context: any, info: any) => {
            const { id } = parent;
            return await clientHistoryService.getClientHistoryByAccount(id);
        }
    },
    Mutation: {
        createAccount: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const account = await accountService.createAccount(input);
            return account;
        },
        updateAccount: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { id } = input;
            if (!id) {
                throw new Error('Account id is required');
            }
            const account = await accountService.updateAccount(id, input);
            return account;
        },
        deleteAccount: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            if (!id) {
                throw new Error('Account id is required');
            }
            return await accountService.deleteAccount(id);
        }
    },
    // Subscription: {},
};

export default accountResolvers;