const express  = require('express');
const bodyparser = require('body-parser')
const app = express();


/*const meu_middleware = function(req, res, next){
    console.log("Executando o middleware.");
    next();

}

const meu_middleware_2 = function(req, res, next){
    console.log("Executando outro middleware.");
    next();

}
app.use(meu_middleware);
app.use(meu_middleware_2);*/

/*let get_request_time = function(req, rex, next){
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
}
app.use(get_request_time);
app.get('/', (req, res)=> {
    res.send("Olá você acessou em "+ req.request_time);
    console.log ("Estou sendo chamado na rota, após o middleware.");
});*/

/*app.use('/tempo', function (req, res, next){
    console.log("Middleware de tempo chamado.");

        let tempo_atual = Date.now();
        let hoje = new Date(tempo_atual);
        req.request_time = hoje.toUTCString();
        next();
});

app.get('/tempo', (req, res) => {
    res.send("Olá! você acessou em " + req.request_time);
});

app.get('/', (req, res) => {
    res.send("Estou no endereço raiz.");
});*/

/*app.use('/teste', function(req, res, next){
    console.log("Início");
    next();
});

app.get('/', (req, res, next) => {
    res.send("Meio.");
});

app.use('/teste', function(req, res){
    console.log('Fim');
});*/


/*app.use(bodyparser.urlencoded({extended: false}));
app.use('/contato', express.static(__dirname + '/public/contato'));

app.post('/contato', (req, res) => {
    console.log("Nome: " + req.body.nome_campo);
    console.log("Sobrenome: " + req.body.sobrenome_campo);
    console.log("Email: " + req.body.email_campo);
    console.log("mensagem: " + req.body.mensagem_campo );

    res.redirect('/obrigado');
});

app.get('/',(req, res)=> {
    res.send("Bem vindo a Eufloria")
  });

app.get('/obrigado',(req, res)=> {
    res.send("Obrigado pela mensagem, a Eufloria.")
    
    
  });

app.get('*',(req, res)=> {
    res.send("Link inválido: 404")
  });*/

const path = require ("path");

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,"views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => console.log("Servidor escutando na porta 3000..."));