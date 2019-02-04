const Server = require('../../server');

describe('Test for /ping route', () => {
  it('should return pong', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('pong');
  });
});
