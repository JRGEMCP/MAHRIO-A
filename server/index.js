'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  require('node-env-file')('.env');
  console.log('Running Development!');
}

require('mahrio').runServer(process.env, __dirname ).then( function( server ) {

  // Schemas
  require('mahrio-header/server/models/user');



  // SERVER VIEWS
  require('./routes/views')( server, 'server/views/', true);
  // STATIC
  require('./routes')( server, 'dist/' );
  // APIs
  require('mahrio-header/server/routes/index')( server );
  require('./routes/apis')( server, 'server/views/' );
});
