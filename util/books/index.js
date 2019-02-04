const { httpGet } = require('../http');

module.exports = {
  getBooksWithoutRating: () => {
    const externalUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    return httpGet(externalUrl).then(apiResult => apiResult.data);
  },
  getRatingFromBookId: (id) => {
    const externalUrl = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
    return httpGet(externalUrl).then(apiResult => apiResult.data);
  },
};
