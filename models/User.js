const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    trim: true
  },
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);
