import * as clientHistoryService from './clientHistory.service.js'

const clientHistoryResolvers = {
    Query: {
        clientHistoryList: async () => await clientHistoryService.getClientHistoryList(),
        clientHistoryById: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await clientHistoryService.getClientHistoryById(id);
        }
      },
    Mutation: {
        createClientHistory: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return await clientHistoryService.createClientHistory(input);
        },
        updateClientHistory: async (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { id } = input;
            return await clientHistoryService.updateClientHistory(id, input);
        },
        deleteClientHistory: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return await clientHistoryService.deleteClientHistory(id);
        },
    },
    // Subscription: {},
};

export default clientHistoryResolvers;