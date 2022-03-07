const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/',function(req,res) {
  res.sendFile(__dirname+'/index.html');
});

app.use("/static", express.static('./static/'));
app.listen(process.env.port || 3000);
console.log('Rodando na porta 3000')