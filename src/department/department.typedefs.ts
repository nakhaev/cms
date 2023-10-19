const departmentTypeDefs = `#graphql
    type Department {
        id: ID
        title: String
        email: String
        phone: String
        status: String
        address: String
        accountId: String!
        users: [User!]
        clients: [Client!]
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
        accountId: String!
    }

    input updateDepartmentInput {
        id: ID!
        title: String
        email: String
        phone: String
        status: String
        address: String
        accountId: String
    }

    type Mutation {
        createDepartment(input: createDepartmentInput): Department
        updateDepartment(input: updateDepartmentInput): Department
        deleteDepartment(id: ID!): Department
    }
    # type Subscription {}
`;

export default departmentTypeDefs;