//assign movie controller to that model
module.exports = {
  '/movie': require('./controllers/movieController'),
  '/games': require('./controllers/gamesController'),
  '/threeprac': require('./controllers/threepracController')
};



//var routes = REQUIRE('Express').Routes