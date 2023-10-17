const userTypeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        password: String
        role: String
        status: String
        accountId: ID!
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
    }

    input UpdateUserInput {
        id: ID!
        name: String
        email: String
        password: String
        role: String
        status: String
        accountId: ID
    }

    type Mutation {
        createUser(input: CreateUserInput): User,
        updateUser(input: UpdateUserInput): User,
        deleteUser(id: ID!): User
    }
    # type Subscription {}
`;

export default userTypeDefs;