const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded();
const {engine} = require("express-handlebars");

app.engine('handlebars', engine());
app.set('views', './views')
app.set('view engine', 'handlebars')


app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.render('home', {title: 'Главная страница', content: "Hello world"})
})

app.get('/reg', (req, res) => {
res.render('reg', {title: 'Регистрация'})
});
app.post('/reg', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send('OK');
});


app.get('/auth', (req, res) => {
    res.render('auth', {title: 'Авторизация'})
});
app.post('/auth', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send('OK');
});

app.get('/about', (req, res) => {
    res.statusCode = 200;
    res.send('About page')
})

app.post('/handlerFeedBack', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send(req.body);
})
app.get('*', (req, res) => {
    res.statusCode = 404;
    res.send('Not found');
})


app.listen(7000);