const clientTypeDefs = `#graphql
    type Client {
        _id: ID
        name: String
        email: String
        status: String
        phone: String
        accountId: ID!
        users: [User!]
        departments: [Department!]
    }

    type Query {
        clients: [Client],
        client(_id: ID!): Client
    }

    input CreateClientInput {
        name: String!
        email: String!
        status: String!
        phone: String!
        accountId: ID!
    }

    input UpdateClientInput {
        _id: ID!
        name: String
        email: String
        status: String
        phone: String
        accountId: ID
    }

    type Mutation {
        createClient(input: CreateClientInput!): Client
        updateClient(input: UpdateClientInput!): Client
        deleteClient(_id: ID!): Client
    }
    # type Subscription {}
`;

export default clientTypeDefs;