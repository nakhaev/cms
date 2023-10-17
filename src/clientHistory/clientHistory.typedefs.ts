const clientHistoryTypeDefs = `#graphql
    type ClientHistory {
        id: ID!
        description: String
        departmentId: ID!
        userId: ID!
        accountId: ID!
        clientId: ID!
        date: String!
    }

    type Query {
        clientHistoryList: [ClientHistory],
        clientHistoryById(id: ID!): ClientHistory
    }

    input CreateClientHistoryInput {
        description: String
        departmentId: ID!
        userId: ID!
        accountId: ID!
        clientId: ID!
        date: String!
    }

    input UpdateClientHistoryInput {
        id: ID!
        description: String
        departmentId: ID
        userId: ID
        accountId: ID
        clientId: ID
        date: String
    }

    type Mutation {
        createClientHistory(input: CreateClientHistoryInput!): ClientHistory
        updateClientHistory(input: UpdateClientHistoryInput!): ClientHistory
        deleteClientHistory(id: ID!): ClientHistory
    }
    # type Subscription {}
`;

export default clientHistoryTypeDefs