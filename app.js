//.  app.js
var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    bodyParser = require( 'body-parser' ),
    ejs = require( 'ejs' ),
    fs = require( 'fs' ),
    settings = require( './settings' ),
    app = express();
var appEnv = cfenv.getAppEnv();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( __dirname + '/public' ) );


app.get( '/', function( req, res ){
  var template = fs.readFileSync( __dirname + '/template/index.ejs', 'utf-8' );
  res.write( ejs.render( template, { settings: settings } ) );
  res.end();
});


var port = appEnv.port || 3000;
app.listen( port );
console.log( "server starting on " + port + " ..." );



