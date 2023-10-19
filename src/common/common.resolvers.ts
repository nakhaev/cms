import * as commonService from './common.service.js';

const commonResolvers = {
    // Query: {},
    Mutation: {
        signUp: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const account = await commonService.signUp(input);
            return account;
        }
    },
    // Subscription: {},
};

export default commonResolvers;