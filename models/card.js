const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {  // ссылка на модель карточки автора
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    required: true,
  },
  likes: {  //список лайкнувших пост пользователей
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);