var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

module.exports = (function(){
  return {
    create: function(req, res){
      var question = new Question(req.body)
      question.save(function(err, savedQuestion){
        if(!savedQuestion){
          res.json(err);
        }
      })
    },
  }
})()
