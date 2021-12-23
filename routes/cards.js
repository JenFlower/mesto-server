const router = require('express').Router();
const { createCard, getCards, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

router.post('/', createCard);
router.get('/', getCards);
router.delete('/:cardId', deleteCard);
router.patch('/like/:cardId', likeCard);
router.patch('/dislike/:cardId', dislikeCard);

module.exports = router;
