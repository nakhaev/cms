const clientTypeDefs = `#graphql
    type Client {
        id: ID
        name: String
        email: String
        status: String
        role: String,
        accountId: ID!
    }

    type Query {
        clients: [Client],
        client(id: ID!): Client
    }

    # type Mutation {}
    # type Subscription {}
`;

export default clientTypeDefs;