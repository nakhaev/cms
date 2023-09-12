const departmentTypeDefs = `#graphql
    type Department {
        id: ID
        title: String
        email: String
        phone: String
        status: String
        address: String
        userIds: [String]
        clientIds: [String]
        clients: [Client]
        users: [User]
    }

    type Query {
        departments: [Department],
        department(id: ID!): Department
    }

    input createDepartmentInput {
        title: String!
        email: String!
        phone: String!
        status: String!
        address: String!
    }

    input updateDepartmentInput {
        id: ID!
        title: String
        email: String
        phone: String
        status: String
        address: String
    }

    type Mutation {
        createDepartment(input: createDepartmentInput): Department
    }
    # type Subscription {}
`;

export default departmentTypeDefs;