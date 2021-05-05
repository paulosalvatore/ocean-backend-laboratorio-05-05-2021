const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['Essa é a primeira mensagem!', 'Essa é a segunda mensagem!'];

// CRUD (Create, Read, Update, Delete)

// GET: READ ALL (exibir todos os registros)
app.get('/mensagens', function (req, res) {
  res.send(mensagens);
});

// GET: READ SINGLE (exibir apenas um registro)

// POST: CREATE (criar um registro)

// PUT: UPDATE (editar um registro)

// DELETE: DELETE (remover um registro)

app.listen(3000);
