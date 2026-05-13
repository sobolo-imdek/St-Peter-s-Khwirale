import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-school-primary mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-school-primary mt-8 mb-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-school-secondary pl-5 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 text-lg text-gray-700 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <img
          src={urlFor(value).width(1000).auto("format").url()}
          alt={value.alt || ""}
          className="my-8 w-full rounded-2xl object-cover shadow-sm"
          loading="lazy"
        />
      );
    },
  },
};

export default function PageBody({ body, className = "" }) {
  if (!Array.isArray(body) || body.length === 0) return null;

  return (
    <div className={className}>
      <PortableText value={body} components={portableTextComponents} />
    </div>
  );
}
