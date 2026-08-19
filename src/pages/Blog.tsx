import { useState, useMemo } from "react";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { useBlogs } from "@/hooks/useBlogs";
import BlogSearch from "@/components/blog/BlogSearch";

const Blog = () => {
  const { blogs } = useBlogs();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((p) => p.category)))],
    [blogs]
  );

  const featured = blogs.find((p) => p.featured);

  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (query) {
      return blogs.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.content.toLowerCase().includes(query)
      );
    }
    return activeCategory === "All"
      ? blogs.filter((p) => !p.featured)
      : blogs.filter((p) => p.category === activeCategory && !p.featured);
  }, [activeCategory, searchQuery, blogs]);

  return (
    <PageTransition>
      <SEO
        title="Blog — AI & Product Insights"
        description="Deep dives into technology, architecture, and the future of software from the Code Envision Technologies engineering team."
        path="/blog"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 pb-20">
          {/* Header */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gradient-headline leading-tight mb-6"
            >
              Insights & Ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Explore helpful articles on software development, AI tools, SaaS products, SEO strategy, automation, and digital growth.
            </motion.p>
            <div className="mt-6">
              <BlogSearch value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          {/* Featured Post */}
          {featured && activeCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-6xl mx-auto px-4 md:px-6 mb-16"
            >
              <Link to={`/blog/${featured.id}`} className="group block">
                <div className="glass glass-hover rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary w-fit mb-4">
                      Featured
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filter */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Posts Grid */}
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="interactive-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="interactive-card"
                >
                  <Link to={`/blog/${post.id}`} className="group block h-full">
                    <article className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <span>Admin</span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} /> {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
