const { httpGet } = require('../../../util/http');

describe('httpGet', () => {
  it('should return a promise', () => {
    const returnedObject = httpGet('www.google.com');
    expect(typeof (returnedObject.then)).toEqual('function');
  });
});
