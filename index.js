// index.js
const express = require('express');
const app = express();

// Se quiser determinar “bom dia” ou “boa noite” automaticamente:
function saudacaoPorHora(nome) {
  const hora = new Date().getHours();
  const prefixo = (hora >= 6 && hora < 18) ? 'Bom dia' : 'Boa noite';
  return `${prefixo}, ${nome}!`;
}

// Rota GET /ola/:nome
app.get('/ola/:nome', (req, res) => {
  const { nome } = req.params;
  res.send(`Olá, ${nome}!`);
});

// Rota GET /boa-noite/:nome
app.get('/boa-noite/:nome', (req, res) => {
  const { nome } = req.params;
  res.send(`Boa noite, ${nome}!`);
});

// Variante: usar saudacaoPorHora em /saudacao/:nome
app.get('/saudacao/:nome', (req, res) => {
  const { nome } = req.params;
  res.send(saudacaoPorHora(nome));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
