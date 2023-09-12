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
        clientHistory(id: ID!): ClientHistory
    }

    # type Mutation {}
    # type Subscription {}
`;

export default clientHistoryTypeDefs