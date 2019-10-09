const mongoose = require('mongoose');
const User = require('./user');

const commentSchema = new mongoose.Schema({
  user: User.name,
  comment: String
});

module.exports = mongoose.model('Comment', commentSchema);

