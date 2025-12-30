import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage({ src }) {
  const [content, setContent] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text); // ✅ STRING ONLY
        setContent(content);
        setData(data);
      })
      .catch(console.error);
  }, [src]);

  return (
    <article className="prose max-w-none">
      {data.title && <h1>{data.title}</h1>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
