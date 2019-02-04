module.exports = {
  method: 'GET',
  path: '/ping',
  options: {
    auth: false,
  },
  handler: () => 'pong',
};
