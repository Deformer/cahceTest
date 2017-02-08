const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./controller/index');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/',indexRouter);

app.listen(3000,function () {
    console.log('Server is working at 3000 port now!');
})