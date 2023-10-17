import * as clientService from './client.service.js'

const clientResolvers = {
    Query: {
        clients: () => clientService.getClientList(),
        client: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return clientService.getClientById(id);
        }
      },
    Mutation: {
        createClient: (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            return clientService.createClient(input);
        },
        updateClient: (parent: any, args: any, context: any, info: any) => {
            const { input } = args;
            const { id } = input;
            return clientService.updateClient(id, input);
        },
        deleteClient: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return clientService.deleteClient(id);
        }
    },
    // Subscription: {},
};

export default clientResolvers;