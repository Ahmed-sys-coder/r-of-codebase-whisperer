import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { blogPosts, type BlogPost } from '@/data/blogData';

interface DbBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  author_role: string;
  cover_image: string;
  featured: boolean;
  published: boolean;
  read_time: string;
  created_at: string;
  updated_at: string;
}

const mapDbBlog = (b: DbBlog): BlogPost => ({
  id: b.slug,
  title: b.title,
  excerpt: b.excerpt || '',
  content: b.content || '',
  category: b.category || '',
  author: b.author || '',
  authorRole: b.author_role || '',
  date: b.created_at?.split('T')[0] || '',
  readTime: b.read_time || '5 min read',
  coverImage: b.cover_image || '',
  featured: b.featured || false,
});

export const useBlogs = () => {
  const { data: dbBlogs, isLoading } = useQuery({
    queryKey: ['public-blogs'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      if (error) return [];
      return (data || []) as DbBlog[];
    },
  });

  const blogs = useMemo(() => {
    const fromDb = (dbBlogs ?? []).map(mapDbBlog);
    const dbSlugs = new Set(fromDb.map(b => b.id));
    const staticOnly = blogPosts.filter(p => !dbSlugs.has(p.id));
    return [...fromDb, ...staticOnly];
  }, [dbBlogs]);

  return { blogs, isLoading };
};

export const useBlogBySlug = (slug: string | undefined) => {
  const { blogs, isLoading } = useBlogs();
  const blog = useMemo(() => blogs.find(b => b.id === slug), [blogs, slug]);
  return { blog, isLoading };
};
