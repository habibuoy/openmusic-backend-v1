const { AlbumHandler } = require('./handlers');
const { routes } = require('./routes');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const albumHandler = new AlbumHandler(service, validator);
    const albumRoutes = routes(albumHandler);

    server.route(albumRoutes);
  },
};
