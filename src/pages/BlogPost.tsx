import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-navy mb-4">Post Not Found</h1>
          <Link to="/blog" className="btn-gold">Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;

      // Headers
      if (trimmed.startsWith("## ")) {
        return <h2 key={i} className="font-display text-2xl font-bold text-navy mt-8 mb-3">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("### ")) {
        return <h3 key={i} className="font-display text-xl font-bold text-navy mt-6 mb-2">{trimmed.slice(4)}</h3>;
      }

      // List items
      if (trimmed.startsWith("- ")) {
        const text = trimmed.slice(2);
        return (
          <li key={i} className="text-slate-brand text-[15px] leading-relaxed ml-5 mb-1 list-disc" dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        );
      }

      // Numbered lists
      const numMatch = trimmed.match(/^(\d+)\.\s(.+)/);
      if (numMatch) {
        return (
          <li key={i} className="text-slate-brand text-[15px] leading-relaxed ml-5 mb-1 list-decimal" dangerouslySetInnerHTML={{ __html: formatInline(numMatch[2]) }} />
        );
      }

      // Table rows
      if (trimmed.startsWith("|")) {
        if (trimmed.match(/^\|[\s-|]+\|$/)) return null; // skip divider
        const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
        const isHeader = i > 0 && content.split("\n")[i + 1]?.trim().match(/^\|[\s-|]+\|$/);
        return (
          <tr key={i}>
            {cells.map((cell, j) =>
              isHeader ? (
                <th key={j} className="text-left text-sm font-bold text-navy py-2 px-3 border-b border-ivory-mid">{cell}</th>
              ) : (
                <td key={j} className="text-sm text-slate-brand py-2 px-3 border-b border-ivory-mid" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
              )
            )}
          </tr>
        );
      }

      // Paragraph
      return <p key={i} className="text-slate-brand text-[15px] leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />;
    });
  };

  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, '<code class="bg-ivory-mid px-1.5 py-0.5 rounded text-sm">$1</code>');
  };

  // Determine if content has tables
  const hasTable = post.content.includes("| ");

  // Related posts
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-navy text-white section-padding pb-12" style={{ backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.08), transparent 60%)" }}>
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold-light text-sm mb-6 hover:text-gold transition-colors">
            <ArrowLeft size={16} /> All Articles
          </Link>
          <span className="inline-flex items-center gap-1.5 text-gold-light text-xs font-semibold uppercase tracking-wider mb-3">
            <Tag size={12} /> {post.category}
          </span>
          <h1 className="font-display text-3xl lg:text-[44px] font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-[6%] py-12">
        <article className="bg-white rounded-xl border border-ivory-mid p-8 lg:p-12">
          {hasTable ? (
            <div>
              {post.content.split("\n").reduce<{ elements: React.ReactNode[]; inTable: boolean; tableRows: string[] }>(
                (acc, line, idx) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith("|")) {
                    acc.inTable = true;
                    acc.tableRows.push(trimmed);
                  } else {
                    if (acc.inTable) {
                      // Flush table
                      acc.elements.push(
                        <div key={`table-${idx}`} className="overflow-x-auto my-4">
                          <table className="w-full">
                            <tbody>
                              {acc.tableRows.filter(r => !r.match(/^\|[\s-|]+\|$/)).map((row, ri) => {
                                const cells = row.split("|").filter(Boolean).map(c => c.trim());
                                return (
                                  <tr key={ri}>
                                    {cells.map((cell, ci) => (
                                      ri === 0 ?
                                        <th key={ci} className="text-left text-sm font-bold text-navy py-2 px-3 border-b border-ivory-mid">{cell}</th> :
                                        <td key={ci} className="text-sm text-slate-brand py-2 px-3 border-b border-ivory-mid" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                                    ))}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      );
                      acc.tableRows = [];
                      acc.inTable = false;
                    }
                    // Render non-table line
                    const rendered = renderContent(trimmed);
                    if (Array.isArray(rendered)) {
                      acc.elements.push(...rendered.filter(Boolean));
                    }
                  }
                  return acc;
                },
                { elements: [], inTable: false, tableRows: [] }
              ).elements}
            </div>
          ) : (
            renderContent(post.content)
          )}
        </article>

        {/* CTA Bar */}
        <div className="bg-navy rounded-xl p-8 mt-8 text-center" style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1), transparent 60%)" }}>
          <h3 className="font-display text-2xl font-bold text-white mb-2">Ready to Get Your Cuba E-Visa?</h3>
          <p className="text-white/50 text-sm mb-4">Apply online in minutes. Instant delivery from America's #1 authorized provider.</p>
          <Link to="/" className="btn-gold">Apply Now →</Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="font-display text-2xl font-bold text-navy mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link to={`/blog/${r.slug}`} key={r.slug} className="block group">
                <article className="bg-white rounded-lg border border-ivory-mid p-5 h-full card-hover">
                  <span className="text-gold text-[11px] font-semibold uppercase tracking-wider">{r.category}</span>
                  <h4 className="font-display text-[16px] font-bold text-navy group-hover:text-gold transition-colors mt-1 leading-snug">{r.title}</h4>
                  <p className="text-[13px] text-slate-brand/60 mt-2">{r.readTime}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
