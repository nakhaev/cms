import * as userService from './user.service.js'

const userResolvers = {
    Query: {
        users: async () => await userService.getUserList(),
        user: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await userService.getUserById(id);
        },
      },
    Mutation: {
        createUser: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await userService.createUser(input);
        },
        updateUser: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { id } = input;
            if (!id) {
                throw new Error('User id is required');
            }
            return await userService.updateUser(input);
        },
        deleteUser: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            if (!id) {
                throw new Error('User id is required');
            }
            return await userService.deleteUser(id);
        }
    },
    // Subscription: {},
};

export default userResolvers;