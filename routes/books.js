const Books = require('../util/books');

module.exports = {
  method: 'GET',
  path: '/books',
  handler: async (request, h) => {
    const result = await Books.getBooksWithRatingByAuthor();
    return h.response(result).code(200);
  },
};
