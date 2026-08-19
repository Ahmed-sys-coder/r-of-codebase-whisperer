import { useState, useEffect } from "react";
import { useParams, useNavigate } from "@/lib/router-compat";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import usePageTitle from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link } from "@/lib/router-compat";

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const categories = [
  "Artificial Intelligence",
  "SaaS Development",
  "Mobile Development",
  "Web Development",
  "Cybersecurity",
  "Startups",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
];

const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  usePageTitle(isEditing ? "Edit Blog Post" : "New Blog Post");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Hamid Saifullah",
    author_role: "CTO & Founder",
    cover_image: "",
    featured: false,
    published: true,
    read_time: "5 min read",
  });

  // Load existing blog for editing
  const { data: existingBlog, isLoading: loadingBlog } = useQuery({
    queryKey: ["admin-blog", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await (supabase as any)
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (existingBlog) {
      setForm({
        title: existingBlog.title || "",
        slug: existingBlog.slug || "",
        excerpt: existingBlog.excerpt || "",
        content: existingBlog.content || "",
        category: existingBlog.category || "",
        author: existingBlog.author || "",
        author_role: existingBlog.author_role || "",
        cover_image: existingBlog.cover_image || "",
        featured: existingBlog.featured || false,
        published: existingBlog.published ?? true,
        read_time: existingBlog.read_time || "5 min read",
      });
    }
  }, [existingBlog]);

  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        ...form,
        updated_at: new Date().toISOString(),
      };

      if (isEditing) {
        const { error } = await (supabase as any)
          .from("blogs")
          .update(payload)
          .eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await (supabase as any).from("blogs").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blogs"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      queryClient.invalidateQueries({ queryKey: ["public-blogs"] });
      toast.success(isEditing ? "Blog updated successfully" : "Blog created successfully");
      navigate("/admin/blogs");
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to save blog post");
    },
  });

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title),
    }));
  };

  const update = (field: string, value: any) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (isEditing && loadingBlog) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin/blogs">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {isEditing ? "Edit Post" : "New Post"}
            </h1>
          </div>
        </div>
        <Button onClick={() => mutation.mutate()} disabled={mutation.isPending || !form.title || !form.slug}>
          {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          {isEditing ? "Update" : "Publish"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="glass rounded-xl p-6 space-y-5">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Title</Label>
              <Input
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter blog title..."
                className="bg-secondary/50 border-border text-lg font-medium"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Slug</Label>
              <Input
                value={form.slug}
                onChange={(e) => update("slug", e.target.value)}
                placeholder="url-friendly-slug"
                className="bg-secondary/50 border-border font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Excerpt</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) => update("excerpt", e.target.value)}
                placeholder="Brief description of the article..."
                rows={3}
                className="bg-secondary/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Content (Markdown)</Label>
              <Textarea
                value={form.content}
                onChange={(e) => update("content", e.target.value)}
                placeholder="Write your article content in markdown..."
                rows={20}
                className="bg-secondary/50 border-border font-mono text-sm leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Settings */}
          <div className="glass rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Settings</h3>

            <div className="flex items-center justify-between">
              <Label className="text-sm text-muted-foreground">Published</Label>
              <Switch
                checked={form.published}
                onCheckedChange={(v) => update("published", v)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm text-muted-foreground">Featured</Label>
              <Switch
                checked={form.featured}
                onCheckedChange={(v) => update("featured", v)}
              />
            </div>
          </div>

          {/* Details */}
          <div className="glass rounded-xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Details</h3>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Category</Label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full h-10 rounded-md border border-border bg-secondary/50 px-3 text-sm text-foreground"
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Author</Label>
              <Input
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                className="bg-secondary/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Author Role</Label>
              <Input
                value={form.author_role}
                onChange={(e) => update("author_role", e.target.value)}
                className="bg-secondary/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Read Time</Label>
              <Input
                value={form.read_time}
                onChange={(e) => update("read_time", e.target.value)}
                placeholder="5 min read"
                className="bg-secondary/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Cover Image URL</Label>
              <Input
                value={form.cover_image}
                onChange={(e) => update("cover_image", e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="bg-secondary/50 border-border"
              />
              {form.cover_image && (
                <img
                  src={form.cover_image}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-lg mt-2"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogEditor;
