import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import usePageTitle from "@/hooks/usePageTitle";
import { FileText, Heart, MessageSquare, Eye } from "lucide-react";

const AdminDashboard = () => {
  usePageTitle("Admin Dashboard");

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [blogsRes, commentsRes, likesRes] = await Promise.all([
        (supabase as any).from("blogs").select("id, published", { count: "exact" }),
        supabase.from("blog_comments").select("id", { count: "exact" }),
        supabase.from("blog_likes").select("id", { count: "exact" }),
      ]);

      const allBlogs = blogsRes.data || [];
      const published = allBlogs.filter((b: any) => b.published).length;
      const drafts = allBlogs.length - published;

      return {
        totalBlogs: allBlogs.length,
        published,
        drafts,
        comments: commentsRes.count || 0,
        likes: likesRes.count || 0,
      };
    },
  });

  const cards = [
    { label: "Total Posts", value: stats?.totalBlogs ?? 0, icon: FileText, color: "text-primary" },
    { label: "Published", value: stats?.published ?? 0, icon: Eye, color: "text-emerald-400" },
    { label: "Comments", value: stats?.comments ?? 0, icon: MessageSquare, color: "text-sky-400" },
    { label: "Likes", value: stats?.likes ?? 0, icon: Heart, color: "text-rose-400" },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your content and engagement</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div key={card.label} className="glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{card.label}</span>
              <card.icon className={`w-4 h-4 ${card.color}`} />
            </div>
            <p className="text-3xl font-bold text-foreground">{card.value}</p>
          </div>
        ))}
      </div>

      {stats?.drafts ? (
        <div className="mt-6 glass rounded-xl p-5">
          <p className="text-sm text-muted-foreground">
            You have <span className="text-foreground font-semibold">{stats.drafts} draft{stats.drafts > 1 ? 's' : ''}</span> waiting to be published.
          </p>
        </div>
      ) : null}
    </AdminLayout>
  );
};

export default AdminDashboard;
