const mongoose = require('mongoose');
const User = require('./user');

const postSchema = new mongoose.Schema({
  user: User[1],
  title: String,
})