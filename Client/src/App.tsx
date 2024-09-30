import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import MarkdownTest from './teste';

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(`# Bem-vindo!
Estou usando TypeScript!
## Subtítulo

- Este é um item de lista
- Outro item de lista

**Texto em negrito**

[Link para Google](https://www.google.com)`);
  return (
    <div className="App">
      <textarea
        value={markdown} // Texto atual do markdown
        onChange={(e) => setMarkdown(e.target.value)} // Atualiza o estado ao digitar
        placeholder="Escreva o markdown aqui..."
        style={{ width: '100%', height: '200px', padding: '10px', fontSize: '16px' }}
      />
      {/* Área de visualização do markdown */}
      <div className="markdown-preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <MarkdownTest></MarkdownTest>
    </div>
  );
};
export default App;