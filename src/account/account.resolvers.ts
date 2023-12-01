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
            const { _id } = args;
            return await accountService.getAccountById(_id);
        }
    },
    Account: {
        users: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await userService.getUsersByAccount(_id);
        },
        departments: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await departmentService.getDepartmentsByAccount(_id);
        },
        clients: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await clientService.getClientsByAccount(_id);
        },
        clientHistory: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = parent;
            return await clientHistoryService.getClientHistoryByAccount(_id);
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
            const { _id } = input;
            if (!_id) {
                throw new Error('Account _id is required');
            }
            const account = await accountService.updateAccount(_id, input);
            return account;
        },
        deleteAccount: async (parent: any, args: any, context: any, info: any) => {
            const { _id } = args;
            if (!_id) {
                throw new Error('Account _id is required');
            }
            return await accountService.deleteAccount(_id);
        }
    },
    // Subscription: {},
};

export default accountResolvers;