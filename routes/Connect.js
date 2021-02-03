const express    = require('express');
const { loginRequired, ensureCorrectUser } = require('../middleware/auth');
const { Follow, unFollow } = require('../handlers/Connect');

const Router = express.Router({mergeParams: true});

Router.route('/:id/:user_id')
.post(loginRequired, ensureCorrectUser, Follow)
.delete(loginRequired, ensureCorrectUser, unFollow);

module.exports = Router;
