import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useBlogs } from "@/hooks/useBlogs";

const BlogPreview = () => {
  const { blogs } = useBlogs();
  const posts = blogs.slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Insights &amp; Ideas
          </h2>
          <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
            Read practical guides on software development, AI, SaaS products, SEO, automation, and digital growth from the Code Envision Technologies team.
          </p>
        </motion.div>

        <div className="interactive-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="interactive-card"
            >
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <article className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-[hsl(var(--card))]">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[hsl(260_60%_25%/0.5)] to-[hsl(220_60%_20%/0.5)]" />
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="relative z-[2] text-[10px] font-semibold uppercase tracking-[0.22em] mb-3 text-silver">
                      {post.category}
                    </span>
                    <h3 className="text-base md:text-[17px] font-semibold text-foreground/95 mb-2.5 leading-[1.3] line-clamp-2 group-hover:text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-silver leading-[1.6] mb-4 line-clamp-2 flex-1 group-hover:text-foreground/85 transition-colors">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-dim pt-3 border-t border-[hsl(0_0%_100%/0.06)] group-hover:border-[hsl(258_90%_66%/0.2)] transition-colors">
                      <span className="font-medium">Admin</span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {post.date
                            ? new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })
                            : ""}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="btn-ghost-purple group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-silver border border-[hsl(0_0%_100%/0.08)] transition-all duration-300"
          >
            Read All Articles
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
