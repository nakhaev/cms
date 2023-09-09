const userTypeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        status: String
        role: String
    }

    type Query {
        users: [User]
    }

    # type Mutation {}
    # type Subscription {}
`;

export default userTypeDefs;