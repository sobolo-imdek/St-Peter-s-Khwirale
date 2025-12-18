import ReactMarkdown from "react-markdown";

export default function Markdown({ content }) {
  return (
    <ReactMarkdown className="prose max-w-none">
      {content}
    </ReactMarkdown>
  );
}
