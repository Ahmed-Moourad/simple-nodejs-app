var express = require('express');
const pino = require('pino');

var app = express();

const logger = pino({ level: 'info' });

logger.info('hello world');
logger.info('I am DEPI- DevOps learner');
logger.info('This is a nodejs app for testing!');

app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.send('I am DEPI- DevOps learner');
    res.send('This is a nodejs app for testing!');

});

app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});
