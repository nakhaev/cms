const clientTypeDefs = `#graphql
    type Client {
        id: ID
        name: String
        email: String
        status: String
        role: String,
        accountId: ID!
        departmentIds: [String]
        userIds: [String]
        users: [User]
        departments: [Department]
    }

    type Query {
        clients: [Client],
        client(id: ID!): Client
    }

    # type Mutation {}
    # type Subscription {}
`;

export default clientTypeDefs;