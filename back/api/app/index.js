const express = require('express');

// const fileUpload = require('express-fileupload');

const router = require('./router');

const app = express();
// require('./helpers/apiDocs')(app);


app.use(router);

module.exports = app;