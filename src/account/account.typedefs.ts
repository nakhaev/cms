const accountTypeDefs = `#graphql
    type Account {
        id: ID
        title: String
        email: String
        phone: String
        status: String
        # users: [User!]
    }

    type Query {
        accounts: [Account],
        account(id: ID!): Account
    }

    input CreateAccountInput {
        title: String
        email: String
        phone: String
        status: String
    }

    input UpdateAccountInput {
        id: ID!
        title: String
        email: String
        phone: String
        status: String
    }

    type Mutation {
        createAccount(input: CreateAccountInput): Account,
        updateAccount(input: UpdateAccountInput): Account,
        deleteAccount(id: ID!): Account
    }
    # type Subscription {}
`;

export default accountTypeDefs;