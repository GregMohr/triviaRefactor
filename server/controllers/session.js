var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = (function(){
  return {
    login: function(req, res){
      User.findOne({name: req.body.name}, function(err, user){
        if(!user){
          var user = new User(req.body);
          user.save(function(err, user){
            if(err){
              res.json(err);
            } else {
              req.session.user = user;
              req.session.save();
              res.json(user);
            }
          })
        } else {
          req.session.user = user;
          req.session.save();
          res.json(user)
        }
      })
    },
    index: function(req, res){
      User.find({}, function(err, users){
        res.json(users);
      })
    },
    show: function(req, res){
      User.findOne({_id: req.params.id}, function(err, user){
        res.json(user)
      })
    },
    addComment: function(req, res){
      User.findOne({_id: req.body.onUser}, function(err, user){
        if(user){
          user.comments.push(req.body.content);
          user.save();
          res.json({status: 'ok'})
        }
      })
    },
    getComments: function(req, res){
      User.findOne({_id: req.body.id}, function(err, user){
        res.json(user)
      })
    },
    logout: function(req, res){
      req.session.destroy();
      res.redirect('/');
    }
  }
})()
