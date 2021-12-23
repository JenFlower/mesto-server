const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  // записываем данные в базу
  Card.create({ name, link })
    // возвращаем записанные в базу данные пользователю
    .then(card => res.send({ data: card }))
    // если данные не записались, вернём ошибку
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getCards = (req, res) => {
  User.find({})
    .then(cards => res.send({data: cards}))
    .catch(() => res.status(500).send({message: 'Server error'}));
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  User.findById(cardId)
    .then(user => res.send({data: user}))
    .catch(() => res.status(500).send({message: 'Server error'}));
};

module.exports.likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
)

module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
)