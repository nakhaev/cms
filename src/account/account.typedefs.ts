const accountTypeDefs = `#graphql
    type Account {
        _id: ID
        title: String
        email: String
        phone: String
        status: String
        users: [User!]
        departments: [Department!]
        clients: [Client!]
        clientHistory: [ClientHistory!]
    }

    type Query {
        accounts: [Account],
        account(_id: ID!): Account
    }

    input CreateAccountInput {
        title: String
        email: String
        phone: String
        status: String
    }

    input UpdateAccountInput {
        _id: ID!
        title: String
        email: String
        phone: String
        status: String
    }

    type Mutation {
        createAccount(input: CreateAccountInput): Account,
        updateAccount(input: UpdateAccountInput): Account,
        deleteAccount(_id: ID!): Account
    }
    # type Subscription {}
`;

export default accountTypeDefs;