const { httpGet } = require('../http');

const getBooksWithoutRating = () => {
  const externalUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(externalUrl).then(apiResult => apiResult.data);
};
const getRatingFromBookId = (id) => {
  const externalUrl = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(externalUrl).then(apiResult => apiResult.data);
};
// console.log('test');
const getBooksWithRating = () => getBooksWithoutRating().then((allBooks) => {
  const allBooksCopy = allBooks.books;
  const allIds = allBooksCopy.map(book => book.id);
  const allPromises = allIds.map(id => getRatingFromBookId(id));
  return Promise.all(allPromises)
    .then(allRatings => allRatings.map(
      (rating, index) => Object.assign(allBooksCopy[index], rating),
    ));
});
const getBooksWithRatingByAuthor = () => getBooksWithRating()
  .then(allBooksWithRating => allBooksWithRating.reduce((acc, val) => {
    console.log(acc);
    if (acc[val.Author] === undefined) {
      acc[val.Author] = [val];
    } else {
      acc[val.Author].push(val);
    }
    return acc;
  }, {}));

module.exports = {
  getBooksWithoutRating,
  getRatingFromBookId,
  getBooksWithRating,
  getBooksWithRatingByAuthor,
};
