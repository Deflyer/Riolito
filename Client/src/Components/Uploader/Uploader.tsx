import React, { useState } from 'react';
import marked from 'marked';

const Uploader: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  // Função para ler o arquivo Markdown
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setMarkdownContent(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".md" onChange={handleFileUpload} />
      <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </div>
  );
};

export default Uploader;
