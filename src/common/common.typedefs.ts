const commonTypeDefs = `#graphql
    # type Query {}
    input SignUpInput {
        title: String
        email: String
        phone: String
        status: String
    }

    type Mutation {
        signUp(input: SignUpInput): Account,
    }
    # type Subscription {}
`;

export default commonTypeDefs;