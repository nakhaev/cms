const userTypeDefs = `#graphql
    type User {
        _id: ID
        name: String
        email: String
        password: String
        role: String
        status: String
        phone: String
        accountId: ID!
        departments: [Department]
        clients: [Client]
    }

    type Query {
        users: [User],
        user(_id: ID!): User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
        role: String!
        status: String!
        phone: String!
        accountId: ID!
        departments: [ID]
        clients: [ID]
    }

    input UpdateUserInput {
        _id: ID!
        name: String
        email: String
        password: String
        role: String
        status: String
        phone: String
        accountId: ID
        departments: [ID]
        clients: [ID]
    }

    type Mutation {
        createUser(input: CreateUserInput): User,
        updateUser(input: UpdateUserInput): User,
        deleteUser(_id: ID!): User
    }
    # type Subscription {}
`;

export default userTypeDefs;