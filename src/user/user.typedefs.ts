const userTypeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        status: String
        role: String,
        accountId: ID!
        departmentIds: [String]
        clientIds: [String]
        clients: [Client]
        departments: [Department]
    }

    type Query {
        users: [User],
        user(id: ID!): User
    }

    # type Mutation {}
    # type Subscription {}
`;

export default userTypeDefs;