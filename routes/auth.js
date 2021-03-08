const express    = require('express');
const { signUp, signIn, deleteUser} = require('../handlers/auth');
const { loginRequired, ensureCorrectUser } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.delete('/deleteUser', loginRequired, ensureCorrectUser, deleteUser);

module.exports = router;