const express    = require('express'),
      app        = express(),
      cors       = require('cors'),
      bodyParser = require('body-parser');

const errorHandler = require('./handlers/error');
const CONFIGS = require('./config');
const { ensureCorrectUser,loginRequired } = require('./middleware/auth')

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comment');

// Server Configs
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/posts', loginRequired, ensureCorrectUser, postRoutes.userRouter);
app.use('/api/posts', loginRequired, postRoutes.generalRouter);
app.use('/api/post/:id/comment', loginRequired, commentRoutes.getRouter);
app.use('/api/post/:id/comment', loginRequired, ensureCorrectUser, commentRoutes.postRouter);


// Routes & Error fallback
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use(errorHandler);

// Server Run

app.listen(CONFIGS.PORT, () => {
    console.log(`Server is starting on PORT : ${CONFIGS.PORT}`);
});


