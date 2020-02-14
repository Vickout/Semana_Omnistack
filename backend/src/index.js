const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-cgwiu.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros

//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
