//assign movie controller to that model
module.exports = {
  '/movie': require('./controllers/movieController'),
  '/games': require('./controllers/gamesController'),
  '/three': require('./controllers/threeController')
};



//var routes = REQUIRE('Express').Routes