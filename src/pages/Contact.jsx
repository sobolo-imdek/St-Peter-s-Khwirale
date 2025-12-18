import { useEffect, useState } from "react";
import Markdown from "../utils/markdown";

export default function Contact() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/pages/contact.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <main className="container mx-auto p-6">
      <Markdown content={content} />
    </main>
  );
}
