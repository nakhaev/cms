import * as accountService from './account.service.js'
import * as userService from '../user/user.service.js'

const accountResolvers = {
    Query: {
        accounts: () => accountService.getAccountList(),
        // account: (parent, args, context, info) => {
        account: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return accountService.getAccountById(id);
        }
      },
    Account: {
        users: (parent: any, args: any, context: any, info: any) => {
            const { id } = parent;
            return userService.getUsersByAccount(id);
        }
    }
    // Mutation: {},
    // Subscription: {},
};

export default accountResolvers;