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

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
        role: String!
        status: String!
        accountId: ID!
        departmentIds: [String]
        clientIds: [String]
    }

    type Mutation {
        createUser(input: CreateUserInput): User
    }
    # type Subscription {}
`;

export default userTypeDefs;