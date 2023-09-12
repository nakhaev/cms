import * as clientService from './client.service.js'

const clientResolvers = {
    Query: {
        clients: () => clientService.getClientList(),
        // client: (parent, args, context, info) => {
        client: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return clientService.getClientById(id);
        }
      },
    // Mutation: {},
    // Subscription: {},
};

export default clientResolvers;