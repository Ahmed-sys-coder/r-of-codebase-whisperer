import { useState, useRef } from "react";
import DOMPurify from "dompurify";
import { useParams, Link, Navigate } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { useBlogs, useBlogBySlug } from "@/hooks/useBlogs";
import BlogEngagement from "@/components/blog/BlogEngagement";
import BlogComments from "@/components/blog/BlogComments";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blog: post, isLoading } = useBlogBySlug(slug);
  const { blogs } = useBlogs();
  const commentsRef = useRef<HTMLDivElement>(null);
  const [commentCount, setCommentCount] = useState(0);

  if (isLoading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </PageTransition>
    );
  }

  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: { "@type": "Person", name: "Admin" },
    publisher: { "@type": "Organization", name: "Code Envision Technologies" },
  };

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {tableRows[0].map((cell, ci) => (
                    <th key={ci} className="text-left py-3 px-4 border-b border-border text-foreground font-semibold">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-3 px-4 border-b border-border text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    const escapeHtml = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    const formatInline = (text: string) =>
      DOMPurify.sanitize(
        escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
        { ALLOWED_TAGS: ["strong"], ALLOWED_ATTR: ["class"] }
      );

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith("|")) {
        inTable = true;
        tableRows.push(line.split("|").filter(Boolean).map((c) => c.trim()));
        continue;
      } else if (inTable) {
        flushTable();
      }
      if (line.trim() === "") continue;
      if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith("- ")) {
        elements.push(<li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-disc" dangerouslySetInnerHTML={{ __html: formatInline(line.slice(2)) }} />);
      } else if (/^\d+\.\s/.test(line.trim())) {
        elements.push(<li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal" dangerouslySetInnerHTML={{ __html: formatInline(line.replace(/^\d+\.\s/, "")) }} />);
      } else {
        elements.push(<p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />);
      }
    }
    if (inTable) flushTable();
    return elements;
  };

  const related = blogs.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
        image={post.coverImage}
        publishedTime={post.date}
        author="Admin"
        jsonLd={articleSchema}
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-3xl mx-auto px-4 md:px-6 mb-10">
            <span className="text-xs font-medium text-primary uppercase tracking-wider mb-4 block">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-gradient-headline leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User size={14} /> Admin</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-4xl mx-auto px-4 md:px-6 mb-12">
            <div className="rounded-2xl overflow-hidden aspect-[21/9]">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-3xl mx-auto px-4 md:px-6">
            {renderContent(post.content)}
          </motion.article>

          <div className="max-w-3xl mx-auto px-4 md:px-6 my-10">
            <BlogEngagement blogId={post.id} commentCount={commentCount} onScrollToComments={() => commentsRef.current?.scrollIntoView({ behavior: "smooth" })} />
          </div>

          <div className="max-w-3xl mx-auto px-4 md:px-6 mb-16">
            <BlogComments ref={commentsRef} blogId={post.id} onCountChange={setCommentCount} />
          </div>

          <div className="max-w-3xl mx-auto px-4 md:px-6 my-16">
            <div className="border-t border-border" />
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.id}`} className="group block">
                  <article className="glass glass-hover rounded-2xl overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">{rp.category}</span>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">{rp.title}</h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
