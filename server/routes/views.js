module.exports = function(server, path, dynamic){
  if( !dynamic ) {
    server.route({
      path: '/{any*}',
      method: 'GET',
      handler: function( req, rep ) {

        rep.file(path + 'index.html')
      }
    });
  } else {
    server.route({
      method: 'GET',
      path: '/{any*}',
      handler: function(request, reply){
        var page = {};
        if( typeof request.params.any !== 'undefined' && request.params.any === '' && request&& server.pages.hasOwnProperty('home') ) {
          page = server.pages.home;
        } else if( server.pages.hasOwnProperty( request.params.any ) ) {
          page = server.pages[ request.params.any ];
        } else {
          page = null;
        }
        reply.view(path + 'index', {
          page: page,
          menu: server.menu ? server.menu : { content: {links:[]}}
        });
      }
    });
  }

}