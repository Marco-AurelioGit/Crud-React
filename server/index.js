const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(cors())

const db = mysql.createConnection({
  user:'root',
  password:'root',
  host:'localhost',
  database:'funcionario',
})

app.use(express.json())

app.get('/getFuncionarios', (req,res) => {
  let QUERY = "SELECT * FROM funcionarios";

  db.query(QUERY, (err,result) => {
    if(err) console.log(err)
    else res.send(result);
  })
})

app.delete('/deletarFuncionarios/:id', (req,res) => {
  const id = req.params.id;
  let QUERY = "DELETE FROM funcionarios WHERE id=?";

  db.query(QUERY, id, (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.put('/updateFuncionarios', (req,res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  const email = req.body.email;
  const cargo = req.body.cargo;
  const pais = req.body.pais;
  const id = req.body.id;

  let QUERY = "UPDATE funcionarios SET nome=?, idade=?, email=?, cargo=?, pais=? WHERE id=?";

  db.query(QUERY, [nome, idade, email, cargo, pais, id], (err,result) => {
    if(err) console.log(err)
    else res.send(result);
  })
})

app.post('/create', (req,res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;
    const cargo = req.body.cargo;
    const pais = req.body.pais;

    let QUERY = "INSERT INTO funcionarios (nome, cargo, idade, email, pais) VALUES (?, ?, ?, ?, ?)";

    db.query(QUERY, [nome, cargo, idade, email, pais], (err,result) => {
      if(err) console.log(err)
      else res.send(result);
    })
})
app.listen(3001, () => {
  console.log(`Servidor rodando na porta 3001`)
})
