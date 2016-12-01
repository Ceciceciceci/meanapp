//assign movie controller to that model
module.exports = {
  '/movie': require('./controllers/movieController'),
  '/games': require('./controllers/gamesController')
};



//var routes = REQUIRE('Express').Routes