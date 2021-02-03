const express = require('express');
const authRouter = require('./auth');
const postRoutes = require('./posts');
const commentRoutes = require('./comment');
const connectRoutes = require('./Connect');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/follow', connectRoutes);

module.exports = router;