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

