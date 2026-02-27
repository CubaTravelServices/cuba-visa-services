import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Footer from "@/components/Footer";

const BlogListing = () => {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="bg-navy text-white section-padding pb-12" style={{ backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.08), transparent 60%)" }}>
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gold-light text-sm mb-6 hover:text-gold transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="eyebrow">Insights</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Cuba Visa &amp; Consular Insights
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Expert guides, travel tips, and the latest updates on Cuba visa requirements, OFAC compliance, and everything U.S. travelers need to know.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-[6%] py-12">
        {/* Featured Post */}
        {featured && (
          <Link to={`/insights/${featured.slug}`} className="block group mb-12">
            <article className="bg-white rounded-xl border border-ivory-mid overflow-hidden card-hover">
              <div className="bg-navy p-8 lg:p-10 relative">
                <span className="absolute top-6 right-6 bg-gold text-navy text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="inline-flex items-center gap-1.5 text-gold-light text-xs font-semibold uppercase tracking-wider mb-3">
                  <Tag size={12} /> {featured.category}
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white group-hover:text-gold-light transition-colors mb-3">
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-4 text-white/40 text-sm">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link to={`/insights/${post.slug}`} key={post.slug} className="block group">
              <article className="bg-white rounded-xl border border-ivory-mid p-7 h-full card-hover">
                <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  <Tag size={12} /> {post.category}
                </span>
                <h3 className="font-display text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-brand leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-brand/60 text-[13px] mt-auto">
                  <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-navy rounded-xl" style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1), transparent 60%)" }}>
          <h2 className="font-display text-3xl font-bold text-white mb-3">Ready to Apply?</h2>
          <p className="text-white/50 mb-6">Get your Cuba e-visa processed through our trusted service.</p>
          <Link to="/" className="btn-gold">Apply for Your E-Visa →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogListing;
