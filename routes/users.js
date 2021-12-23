const router = require('express').Router();
const { getUsers, getUser, createUser } = require('../controllers/users');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUser); //example: http://localhost:3000/users/61c4dc701650d60ed1ddaf1a

module.exports = router;
