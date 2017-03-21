var mongoose=require('mongoose'),
    Schema = mongoose.Schema,
    gameSchema = new Schema({
      player: String,
      score: Number
    }, {timestamps: true});

mongoose.model('Game', gameSchema);
