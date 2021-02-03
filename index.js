const express    = require('express'),
      app        = express(),
      cors       = require('cors'),
      bodyParser = require('body-parser');

const errorHandler = require('./handlers/error');
const CONFIGS = require('./config');
const router = require('./routes');

// Server Configs
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', router);

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