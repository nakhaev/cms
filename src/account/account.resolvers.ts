import * as accountService from './account.service.js'
const accountResolvers = {
    Query: {
        accounts: async () => await accountService.getAccountList(),
        // account: (parent, args, context, info) => {
        account: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await accountService.getAccountById(id);
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