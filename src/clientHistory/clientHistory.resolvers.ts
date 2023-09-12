import * as clientHistoryService from './clientHistory.service.js'

const clientHistoryResolvers = {
    Query: {
        clientHistoryList: () => clientHistoryService.getClientHistoryList(),
        // userhistory: (parent, args, context, info) => {
        clientHistoryById: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return clientHistoryService.getClientHistoryById(id);
        }
      },
    // Mutation: {},
    // Subscription: {},
};

export default clientHistoryResolvers;