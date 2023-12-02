const departmentTypeDefs = `#graphql
    type Department {
        _id: ID
        title: String
        email: String
        phone: String
        status: String
        address: String
        accountId: String!
        users: [User!]
        clients: [Client!]
        emails: [String!]
        phones: [String!]
    }

    type Query {
        departments: [Department],
        department(_id: ID!): Department
    }

    input createDepartmentInput {
        title: String!
        email: String!
        phone: String!
        status: String!
        address: String!
        accountId: String!
        emails: [String!]
        phones: [String!]
    }

    input updateDepartmentInput {
        _id: ID!
        title: String
        email: String
        phone: String
        status: String
        address: String
        accountId: String
        emails: [String!]
        phones: [String!]
    }

    type Mutation {
        createDepartment(input: createDepartmentInput): Department
        updateDepartment(input: updateDepartmentInput): Department
        deleteDepartment(_id: ID!): Department
    }
    # type Subscription {}
`;

export default departmentTypeDefs;