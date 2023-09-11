import users from '../mock/user.mock.js';
import * as userService from './user.service.js'

const userResolvers = {
    Query: {
        users: () => userService.getUserList(),
        // user: (parent, args, context, info) => {
        user: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return userService.getUserById(id);
        }
      },
    // Mutation: {},
    // Subscription: {},
};

export default userResolvers;