module.exports = function( server, publicPath ) {
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
    path: '/{any*}',
    method: 'GET',
    handler: function( req, rep ) {

      rep.file(publicPath + 'index.html')
    }
  });
};

