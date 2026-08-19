-- blog_likes
CREATE TABLE public.blog_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (blog_id, user_id)
);
ALTER TABLE public.blog_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view likes" ON public.blog_likes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can like" ON public.blog_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unlike their own" ON public.blog_likes FOR DELETE USING (auth.uid() = user_id);

-- blog_comments
CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view comments" ON public.blog_comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can comment" ON public.blog_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own comments" ON public.blog_comments FOR DELETE USING (auth.uid() = user_id);

-- roles
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Admins can view roles" ON public.user_roles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert roles" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update roles" ON public.user_roles FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete roles" ON public.user_roles FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

-- blogs
CREATE TABLE public.blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  category text DEFAULT '',
  author text DEFAULT '',
  author_role text DEFAULT '',
  cover_image text DEFAULT '',
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  read_time text DEFAULT '5 min read',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published blogs" ON public.blogs FOR SELECT USING (published = true);
CREATE POLICY "Admins can view all blogs" ON public.blogs FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert blogs" ON public.blogs FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update blogs" ON public.blogs FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete blogs" ON public.blogs FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- contact_messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone text,
  subject text,
  message TEXT NOT NULL,
  source TEXT,
  is_read boolean NOT NULL DEFAULT false,
  ip_address text,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit contact messages" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    ip_address IS NULL
    AND length(name) BETWEEN 1 AND 120
    AND length(email) BETWEEN 3 AND 255
    AND length(message) BETWEEN 1 AND 5000
  );
CREATE POLICY "Admins can read contact messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update contact messages" ON public.contact_messages FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_contact_messages_created_at ON public.contact_messages (created_at DESC);
CREATE INDEX idx_contact_messages_is_read ON public.contact_messages(is_read);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER trg_contact_messages_updated_at BEFORE UPDATE ON public.contact_messages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- rate limit
CREATE TABLE public.contact_submission_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_csa_ip_created ON public.contact_submission_attempts(ip_address, created_at DESC);
ALTER TABLE public.contact_submission_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No direct client access" ON public.contact_submission_attempts AS RESTRICTIVE FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);

-- comment author validation
CREATE OR REPLACE FUNCTION public.validate_blog_comment_author()
RETURNS trigger LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
DECLARE normalized text;
BEGIN
  normalized := lower(regexp_replace(trim(coalesce(NEW.author_name, '')), '\s+', ' ', 'g'));
  IF length(normalized) < 1 OR length(normalized) > 60 THEN
    RAISE EXCEPTION 'Invalid author name length';
  END IF;
  IF normalized IN (
    'admin','administrator','administrators','moderator','mod','owner','staff',
    'support','team','official','root','superuser','system',
    'code envision','code envision technologies','codeenvision','code-envision',
    'ahmad tatla','ahmed sarfaraz tatla','ahmed tatla','hamid saifullah',
    'ceo','cto'
  ) THEN
    RAISE EXCEPTION 'This author name is reserved';
  END IF;
  NEW.author_name := trim(NEW.author_name);
  RETURN NEW;
END; $$;
CREATE TRIGGER validate_blog_comment_author_trigger BEFORE INSERT OR UPDATE ON public.blog_comments FOR EACH ROW EXECUTE FUNCTION public.validate_blog_comment_author();

-- lockdown
REVOKE ALL ON public.contact_submission_attempts FROM anon, authenticated, PUBLIC;
REVOKE SELECT ON public.contact_messages FROM anon;
REVOKE SELECT ON public.user_roles FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.validate_blog_comment_author() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;