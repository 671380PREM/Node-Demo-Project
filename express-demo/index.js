const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set('view engine', 'pug');

app.set('views', './views');

// console.log("App Name: - ", config.get('name'));
// console.log("Mail Server: - ", config.get('mail.host'));
// console.log("Mail Password: - ", config.get('mail.password'));
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled');
}

dbDebugger('Conected  to DB');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(logger);

app.use(function (req, res, next) {
    console.log('Authenticating');
    next();
});

app.use('/api/courses', courses);
app.use('/', home)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening port ${port}`);
});


