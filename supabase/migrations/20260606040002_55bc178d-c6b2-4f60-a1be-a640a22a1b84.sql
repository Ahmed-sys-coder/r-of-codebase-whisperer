DROP POLICY IF EXISTS "Authenticated users can comment" ON public.blog_comments;
CREATE POLICY "Authenticated users can comment" ON public.blog_comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view roles" ON public.user_roles;
CREATE POLICY "Admins can view roles" ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));