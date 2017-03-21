var session = require('./../controllers/session.js'),
    trivia = require('./../controllers/trivia.js'),
    game = require('./../controllers/game.js');

module.exports = function(app){
  app.post('/login', function(req, res){session.login(req, res)});
  app.get('/getSessionUser', function(req, res){res.json(req.session.user)});
  app.get('/logout', function(req, res){req.session.destroy()});
  app.get('/clearSession', function(req, res){req.session.destroy()});
  app.post('/create', function(req, res){trivia.create(req, res)});
  app.get('/chooseQuestions', function(req, res){game.chooseQuestions(req, res)});
  app.post('/submitGame', function(req, res){game.submitGame(req, res)});
  app.get('/getGames', function(req, res){game.getGames(req, res)});
}
