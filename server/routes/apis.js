module.exports = function(server, path){
  server.route({
    method: 'GET',
    path: '/api/pages/{page*}',
    handler: function(request, reply) {
      if( server.pages[ request.params.page ] ) {
        reply.view(path + 'page', {
          page: server.pages[ request.params.page ]
        });
      } else {
        reply( require('boom').badRequest() );
      }
    }
  });
};