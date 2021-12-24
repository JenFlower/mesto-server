const User = require('../models/user');

const ERROR_DEFAULT = 500;
const ERROR_INCORRECT_VALUE = 400;
const ERROR_NOT_FOUND = 404;

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch((err) => {
      if(err.name === 'IncorrectValueError') {
        res.status(ERROR_INCORRECT_VALUE).send({ message: 'Передано некорректное значение'});
      }
      else {
        res.status(ERROR_DEFAULT).send({ message: 'Произошла ошибка' });
      }
    })
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({data: users}))
    .catch((err) => {
      if(err.name === 'NotFound') {
        res.status(ERROR_NOT_FOUND).send({message: 'Пользователи не найдены'});
      }
      else {
        res.status(ERROR_DEFAULT).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then(user => res.send({data: user}))
    .catch((err) => {
      if(err.name === 'NotFound') {
        res.status(ERROR_NOT_FOUND).send({message: 'Пользователь не найден'});
      }
      else {
        res.status(ERROR_DEFAULT).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about }
  )
  .then(user => res.send({data: user}))
  .catch((err) => {
    if(err.name === 'NotFound') {
      res.status(ERROR_INCORRECT_VALUE).send({message: 'Передано некорректное значение'});
    }
    else if(err.name === 'NotFound') {
      res.status(ERROR_NOT_FOUND).send({message: 'Пользователь не найден'});
    }
    else {
      res.status(ERROR_DEFAULT).send({ message: 'Произошла ошибка' });
    }
  });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar }
  )
  .then(user => res.send({data: user}))
  .catch((err) => {
    if(err.name === 'NotFound') {
      res.status(ERROR_INCORRECT_VALUE).send({message: 'Передано некорректное значение'});
    }
    else if(err.name === 'NotFound') {
      res.status(ERROR_NOT_FOUND).send({message: 'Пользователь не найден'});
    }
    else {
      res.status(ERROR_DEFAULT).send({ message: 'Произошла ошибка' });
    }
  });
};