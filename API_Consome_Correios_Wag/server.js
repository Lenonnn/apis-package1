const express = require('express');
const app = express();
const func = require('./functions');
const PORT = process.env.PORT || 3000;

var retorno = '';

app.use(express.urlencoded({extended: true}));

app.listen(PORT, function () {
    console.log('Servidor rodando na porta 3000')
});

app.set('view engine', 'ejs');
 
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/show', (req, res) => {
   retorno = func.buscaCep(req.body.cep);
   res.redirect('/show')
})

app.get('/show', (req, res) => {
    var ret = retorno;
    var jsonstr = '[' + JSON.stringify(ret) + ']';
    var jsontbl = JSON.parse(jsonstr);
    res.render('show.ejs', { data: jsontbl });
 })


