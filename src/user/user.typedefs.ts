const userTypeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        password: String
        role: String
        status: String
        accountId: ID!
        departments: [Department]
        clients: [Client]
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
        departments: [ID]
        clients: [ID]
    }

    input UpdateUserInput {
        id: ID!
        name: String
        email: String
        password: String
        role: String
        status: String
        accountId: ID
        departments: [ID]
        clients: [ID]
    }

    type Mutation {
        createUser(input: CreateUserInput): User,
        updateUser(input: UpdateUserInput): User,
        deleteUser(id: ID!): User
    }
    # type Subscription {}
`;

export default userTypeDefs;