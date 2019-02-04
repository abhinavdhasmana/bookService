const Hapi = require('hapi');
const routes = require('./routes');

// Create a server with a host and port
const server = Hapi.server({
  host: '0.0.0.0',
  port: 8080,
});

const start = async () => {
  try {
    server.route(routes());
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const startForTest = async () => {
  server.route(routes());
};

//
if (!module.parent) {
  start();
} else {
  startForTest();
}
module.exports = server;
