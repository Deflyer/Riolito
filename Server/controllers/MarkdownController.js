const fs = require('fs');
const path = require('path');

// Função controladora que lida com a requisição para ler o arquivo markdown
const getMarkdownFile = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'example.md');  // Caminho do arquivo markdown
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo markdown.' });
    }
    res.send(data);  // Retorna o conteúdo do arquivo
  });
};

module.exports = { getMarkdownFile };
