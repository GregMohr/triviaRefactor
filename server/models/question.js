var mongoose=require('mongoose'),
    Schema = mongoose.Schema,
    questionSchema = new Schema({
      question: {type: String, required: [true, "Question is required."], trim: true},
      answers: []
    }, {timestamps: true});

mongoose.model('Question', questionSchema);
