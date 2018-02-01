module.exports = function( server, publicPath ) {
  server.route({
    path: '/favicon.ico',
    method: 'GET',
    handler: function(req, rep){
      rep({});
    }
  });

  server.route({
    path: '/assets/{any*}',
    method: 'GET',
    handler: {
      directory: {
        path: publicPath
      }
    },
    config: {
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'private'
      }
    }
  });

  server.route({
    path: '/fonts/{any*}',
    method: 'GET',
    handler: {
      directory: {
        path: publicPath + 'fonts/'
      }
    }
  });
};

