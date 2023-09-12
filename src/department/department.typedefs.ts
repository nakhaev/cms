const departmentTypeDefs = `#graphql
    type Department {
        id: ID
        title: String
        email: String
        phone: String
        status: String
        address: String
    }

    type Query {
        departments: [Department],
        department(id: ID!): Department
    }

    # type Mutation {}
    # type Subscription {}
`;

export default departmentTypeDefs;