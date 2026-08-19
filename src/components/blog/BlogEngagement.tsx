import { useState, useEffect } from "react";
import { Heart, Share2, MessageCircle, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface BlogEngagementProps {
  blogId: string;
  commentCount: number;
  onScrollToComments: () => void;
}

const BlogEngagement = ({ blogId, commentCount, onScrollToComments }: BlogEngagementProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id ?? null);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchLikes = async () => {
      const { count } = await supabase
        .from("blog_likes")
        .select("*", { count: "exact", head: true })
        .eq("blog_id", blogId);
      setLikeCount(count ?? 0);

      if (userId) {
        const { data } = await supabase
          .from("blog_likes")
          .select("id")
          .eq("blog_id", blogId)
          .eq("user_id", userId)
          .maybeSingle();
        setLiked(!!data);
      }
    };
    fetchLikes();
  }, [blogId, userId]);

  const handleLike = async () => {
    if (!userId) {
      toast.error("Please sign in to like articles");
      return;
    }

    if (liked) {
      await supabase
        .from("blog_likes")
        .delete()
        .eq("blog_id", blogId)
        .eq("user_id", userId);
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      await supabase
        .from("blog_likes")
        .insert({ blog_id: blogId, user_id: userId });
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
    setShowShareMenu(false);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(document.title);

  const shareOptions = [
    { label: "Copy Link", icon: copied ? Check : Copy, action: handleCopyLink },
    { label: "Twitter / X", icon: null, action: () => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, "_blank") },
    { label: "LinkedIn", icon: null, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank") },
    { label: "WhatsApp", icon: null, action: () => window.open(`https://wa.me/?text=${shareTitle}%20${shareUrl}`, "_blank") },
  ];

  return (
    <div className="flex items-center gap-1">
      {/* Like */}
      <button
        onClick={handleLike}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm transition-all duration-300 hover:scale-105"
      >
        <Heart
          size={16}
          className={`transition-colors duration-300 ${liked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
        />
        <span className={`font-medium ${liked ? "text-red-400" : "text-muted-foreground"}`}>
          {likeCount}
        </span>
      </button>

      {/* Comments */}
      <button
        onClick={onScrollToComments}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={16} />
        <span className="font-medium">{commentCount}</span>
      </button>

      {/* Share */}
      <div className="relative">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
        >
          <Share2 size={16} />
          <span className="font-medium hidden sm:inline">Share</span>
        </button>
        <AnimatePresence>
          {showShareMenu && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-48 glass rounded-xl border border-border overflow-hidden z-50"
            >
              {shareOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={opt.action}
                  className="w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogEngagement;
