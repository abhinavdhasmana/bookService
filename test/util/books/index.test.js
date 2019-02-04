/**
 * @jest-environment node
 */

const { getBooksWithoutRating } = require('../../../util/books');


describe('getBooksWithoutRating', () => {
  it('should fetch all the books from the external API', async () => {
    const allBooks = await getBooksWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});
