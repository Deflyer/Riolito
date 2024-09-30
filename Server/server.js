const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Rota para servir o arquivo Markdown
app.get('/markdown', (req, res) => {
  const filePath = path.join(__dirname, 'example.md'); // Caminho do arquivo markdown
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo.');
    }
    res.send(data); // Retorna o conteúdo do arquivo
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
