import React, { useEffect, useState } from 'react';
import marked from 'marked';

const Display: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    // Faz uma requisição para buscar o arquivo markdown do servidor
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('http://localhost:3001/markdown');
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Erro ao carregar o markdown:', error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </div>
  );
};

export default Display;
