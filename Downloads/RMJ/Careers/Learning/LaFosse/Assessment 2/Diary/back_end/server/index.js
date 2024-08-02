require('dotenv').config();

const api = require('./app');

console.log('port' +process.env.PORT);

api.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}`);
})