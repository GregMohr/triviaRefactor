var mongoose=require('mongoose'),
    Schema = mongoose.Schema,
    userSchema = new Schema({
      name: {
        type: String,
        required: [true, "Username is required."],
        trim: true
      },
      _questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
    }, {timestamps: true})

mongoose.model('User', userSchema);
