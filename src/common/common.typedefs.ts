const commonTypeDefs = `#graphql
    # type Query {}
    input SignUpInput {
        email: String!
        phone: String
        password: String!
        title: String!
        name: String!
        address: String!
    }

    type Mutation {
        signUp(input: SignUpInput): Account,
    }
    # type Subscription {}
`;

export default commonTypeDefs;