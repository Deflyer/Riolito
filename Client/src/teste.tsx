import ReactMarkdown from "react-markdown";

const MarkdownTest = () => {
  return (
    <div>
      <ReactMarkdown
        children={`# This is markdown!`}
      />
    </div>
  );
};

export default MarkdownTest;
