const { httpGet } = require('../../../util/http');

describe('httpGet', () => {
  it('should return a promise', () => {
    const returnedObject = httpGet('www.google.com');
    // expect(2).toEqual(1);
    expect(typeof (returnedObject.then)).toEqual('function');
    // console.log('temp');
  });
});
