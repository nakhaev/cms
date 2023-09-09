import users from '../mock/user.mock.js';

const userResolvers = {
    Query: {
        users: () => users,
      },
    // Mutation: {},
    // Subscription: {},
};

export default userResolvers;