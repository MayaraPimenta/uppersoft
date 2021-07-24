const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})

router.get('/cadastro', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/cadastro.html'));
})

router.get('/lista-usuarios', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/lista-usuarios.html'));
})


app.use('/', router);


app.listen(process.env.PORT || 3000);