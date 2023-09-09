import books from '../mock/book.mock.js';

const bookResolvers = {
    Query: {
        books: () => books,
      },
    // Mutation: {},
    // Subscription: {},
};

export default bookResolvers;