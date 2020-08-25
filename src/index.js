const express = require('express')
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(require('./router/index.js'));

app.listen(4000, () => {
console.log(' server on port 4000');

})