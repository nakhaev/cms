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
        emails: [String!]
        phones: [String!]
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
        emails: [String!]
        phones: [String!]
    }

    input UpdateAccountInput {
        _id: ID!
        title: String
        email: String
        phone: String
        status: String
        emails: [String!]
        phones: [String!]
    }

    type Mutation {
        createAccount(input: CreateAccountInput): Account,
        updateAccount(input: UpdateAccountInput): Account,
        deleteAccount(_id: ID!): Account
    }
    # type Subscription {}
`;

export default accountTypeDefs;