// npm install
// npm install --dev nodemon 
// npm install --save express
// npm install --save ejs

const exp = require('constants');
const express = require('express');
const app = express();

// Serving the Public Folder As Static For Assets And CSS
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/', (req, res, next) => {
    res.render('index');
})

const port = process.env.PORT || 2100;
app.listen(port, () => {
    console.log('Listening on port 2100');
});