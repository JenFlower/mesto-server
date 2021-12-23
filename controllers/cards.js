const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const { name, link, owner, likes, createdAt } = req.body;

  // записываем данные в базу
  Card.create({ name, link, owner, likes, createdAt })
    // возвращаем записанные в базу данные пользователю
    .then(card => res.send({ data: card }))
    // если данные не записались, вернём ошибку
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};