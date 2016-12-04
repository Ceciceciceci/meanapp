//assign movie controller to that model
module.exports = {
  '/movie': require('./controllers/movieController'),
  '/deers': require('./controllers/deersController'),
  '/threeprac': require('./controllers/threepracsController')
};



//var routes = REQUIRE('Express').Routes