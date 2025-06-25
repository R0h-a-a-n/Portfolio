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
    <div className="min-h-screen flex flex-col items-center px-4 py-24 text-black dark:text-white bg-transparent" style={{background: 'none'}}>
      {/* Header */}
      <div className="w-full max-w-4xl mb-12 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="#facc15" stroke="#222" strokeWidth="2"/><path d="M7 9h10M7 13h6" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">My Blogs</h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
          Read my latest posts on software, AI, and engineering. Click a post to read more.
        </p>
      </div>
      {/* Blog Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.length === 0 && (
          <div className="text-gray-500 dark:text-gray-400 italic col-span-2">No blog posts found. Add a markdown file to <b>src/blogs/</b>.</div>
        )}
        {posts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block rounded-2xl border-2 border-black dark:border-gray-200 bg-white/90 dark:bg-gray-900/90 shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:shadow-[12px_12px_0px_rgba(250,204,21,0.25)] hover:border-yellow-400 dark:hover:border-yellow-300 p-8 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ minHeight: '180px' }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-300 mb-3 transition-colors duration-200">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-2">{post.summary}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-yellow-600 dark:text-yellow-300 group-hover:underline">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 