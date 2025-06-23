import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

// Use require.context with raw-loader to import all markdown files as raw text
const mdContext = require.context('!!raw-loader!../blogs', false, /\.md$/);

function findMdBySlug(slug) {
  for (const key of mdContext.keys()) {
    const raw = mdContext(key).default || mdContext(key);
    const match = raw.match(/^---([\s\S]*?)---/);
    if (!match) continue;
    const lines = match[1].split('\n').map(l => l.trim()).filter(Boolean);
    let metaSlug = '';
    for (const line of lines) {
      const [k, ...rest] = line.split(':');
      if (k.trim() === 'slug') metaSlug = rest.join(':').trim();
    }
    if (metaSlug === slug) return raw;
  }
  return null;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const md = findMdBySlug(slug);
    if (!md) {
      setNotFound(true);
      return;
    }
    // Remove frontmatter
    const body = md.replace(/^---([\s\S]*?)---/, '').trim();
    setContent(marked.parse(body));
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24" style={{background: 'none'}}>
      <div className="max-w-3xl w-full rounded-2xl border border-gray-300 shadow-xl bg-white/90 p-10">
        {notFound ? (
          <h1 className="text-3xl font-bold text-red-600">Blog post not found.</h1>
        ) : content ? (
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div className="text-gray-400 italic">Loading...</div>
        )}
      </div>
    </div>
  );
} 