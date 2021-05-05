const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['Essa é a primeira mensagem!', 'Essa é a segunda mensagem!'];
//                  0                              1

// CRUD (Create, Read, Update, Delete)

// GET: READ ALL (exibir todos os registros)
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// GET: READ SINGLE (exibir apenas um registro)
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  if (!mensagem) {
    res.send('Mensagem não encontrada.');
  }

  res.send(mensagem);
});

// POST: CREATE (criar um registro)

// PUT: UPDATE (editar um registro)

// DELETE: DELETE (remover um registro)

app.listen(3000);
