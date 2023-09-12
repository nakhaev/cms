const accountTypeDefs = `#graphql
    type Account {
        id: ID
        title: String
        email: String
        phone: String
        status: String
        users: [User!]
    }

    type Query {
        accounts: [Account],
        account(id: ID!): Account
    }

    # type Mutation {}
    # type Subscription {}
`;

export default accountTypeDefs;