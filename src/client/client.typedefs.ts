const clientTypeDefs = `#graphql
    type Client {
        id: ID
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
        client(id: ID!): Client
    }

    input CreateClientInput {
        name: String!
        email: String!
        status: String!
        phone: String!
        accountId: ID!
    }

    input UpdateClientInput {
        id: ID!
        name: String
        email: String
        status: String
        phone: String
        accountId: ID
    }

    type Mutation {
        createClient(input: CreateClientInput!): Client
        updateClient(input: UpdateClientInput!): Client
        deleteClient(id: ID!): Client
    }
    # type Subscription {}
`;

export default clientTypeDefs;