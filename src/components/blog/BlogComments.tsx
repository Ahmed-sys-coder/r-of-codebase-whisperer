import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, User, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Comment {
  id: string;
  blog_id: string;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface BlogCommentsProps {
  blogId: string;
  onCountChange: (count: number) => void;
}

const BlogComments = forwardRef<HTMLDivElement, BlogCommentsProps>(
  ({ blogId, onCountChange }, ref) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
      const getUser = async () => {
        const { data } = await supabase.auth.getUser();
        setUserId(data.user?.id ?? null);
      };
      getUser();
    }, []);

    const fetchComments = async () => {
      const { data } = await supabase
        .from("blog_comments")
        .select("*")
        .eq("blog_id", blogId)
        .order("created_at", { ascending: false });
      const fetched = data ?? [];
      setComments(fetched);
      onCountChange(fetched.length);
    };

    useEffect(() => {
      fetchComments();

      const channel = supabase
        .channel(`comments-${blogId}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "blog_comments", filter: `blog_id=eq.${blogId}` },
          () => fetchComments()
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }, [blogId]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!userId) {
        toast.error("Please sign in to comment");
        return;
      }
      const trimmedName = name.trim();
      const trimmedContent = content.trim();
      if (!trimmedName || !trimmedContent) {
        toast.error("Please fill in both fields");
        return;
      }
      if (trimmedName.length > 60 || trimmedContent.length > 1000) {
        toast.error("Name or comment is too long");
        return;
      }
      const reserved = new Set([
        "admin","administrator","moderator","mod","owner","staff","support","team","official","root","superuser","system",
        "code envision","code envision technologies","codeenvision","code-envision",
        "ahmad tatla","ahmed sarfaraz tatla","ahmed tatla","hamid saifullah","ceo","cto",
      ]);
      const normalized = trimmedName.toLowerCase().replace(/\s+/g, " ");
      if (reserved.has(normalized)) {
        toast.error("This display name is reserved. Please choose a different name.");
        return;
      }

      setSubmitting(true);
      const { error } = await supabase.from("blog_comments").insert({
        blog_id: blogId,
        user_id: userId,
        author_name: trimmedName,
        content: trimmedContent,
      });

      if (error) {
        const msg = /reserved/i.test(error.message)
          ? "This display name is reserved. Please choose a different name."
          : "Failed to post comment";
        toast.error(msg);
      } else {
        setContent("");
        toast.success("Comment posted!");
        fetchComments();
      }
      setSubmitting(false);
    };

    const handleDelete = async (commentId: string) => {
      await supabase.from("blog_comments").delete().eq("id", commentId);
      fetchComments();
      toast.success("Comment deleted");
    };

    const timeAgo = (dateStr: string) => {
      const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
      if (seconds < 60) return "just now";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes}m ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours}h ago`;
      const days = Math.floor(hours / 24);
      return `${days}d ago`;
    };

    return (
      <div ref={ref}>
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
          <MessageCircle size={24} className="text-primary" />
          Discussion ({comments.length})
        </h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={60}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <textarea
              placeholder={userId ? "Share your thoughts..." : "Please sign in to comment"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={1000}
              rows={3}
              disabled={!userId}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none disabled:opacity-50"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {content.length}/1000
              </span>
              <button
                type="submit"
                disabled={submitting || !userId}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50"
              >
                <Send size={14} />
                Post Comment
              </button>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          <AnimatePresence>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <User size={14} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {comment.author_name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {timeAgo(comment.created_at)}
                      </span>
                    </div>
                  </div>
                  {userId === comment.user_id && (
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                  {comment.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
          {comments.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-8">
              No comments yet. Be the first to share your thoughts!
            </p>
          )}
        </div>
      </div>
    );
  }
);

BlogComments.displayName = "BlogComments";

export default BlogComments;
