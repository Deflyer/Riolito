const express = require('express');
const { getMarkdownFile } = require('../controllers/markdownController'); // Importa o controlador
const router = express.Router();

// Define a rota para servir o arquivo markdown
router.get('/markdown', getMarkdownFile);

module.exports = router;
