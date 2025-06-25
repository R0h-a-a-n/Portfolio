import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mdContext = require.context('!!raw-loader!../blogs', false, /\.md$/);

function parseFrontmatter(md) {
  const match = md.match(/^---([\s\S]*?)---/);
  if (!match) return {};
  const lines = match[1].split('\n').map(l => l.trim()).filter(Boolean);
  const meta = {};
  for (const line of lines) {
    const [k, ...rest] = line.split(':');
    if (k && rest.length) meta[k.trim()] = rest.join(':').trim();
  }
  return meta;
}

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function load() {
      const entries = mdContext.keys().map((key) => {
        const raw = mdContext(key).default || mdContext(key);
        const meta = parseFrontmatter(raw);
        return meta.slug ? meta : null;
      });
      setPosts(entries.filter(Boolean));
    }
    load();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-24 text-black dark:text-white" style={{background: 'none'}}>
      <div className="max-w-3xl w-full mb-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">My Blogs</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Read my latest posts on software, AI, and engineering. Click a post to read more.<br />

        </p>
      </div>
      <div className="max-w-3xl w-full flex flex-col gap-8">
        {posts.length === 0 && (
          <div className="text-gray-500 dark:text-gray-400 italic">No blog posts found. Add a markdown file to <b>src/blogs/</b>.</div>
        )}
        {posts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block rounded-xl border border-gray-300 bg-white/90 dark:bg-gray-900/90 shadow-md p-8 hover:shadow-lg transition-all duration-200 group"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 mb-2">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 