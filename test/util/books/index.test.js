/**
 * @jest-environment node
 */

const { getBooksWithoutRating, getRatingFromBookId } = require('../../../util/books');


describe('getBooksWithoutRating', () => {
  it('should fetch all the books from the external API', async () => {
    const allBooks = await getBooksWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});

describe('getRatingFromBookId', () => {
  it('should fetch rating of a book with a given id', async () => {
    const rating = await getRatingFromBookId(10);
    expect(typeof (rating.rating)).toEqual('number');
  });
});
