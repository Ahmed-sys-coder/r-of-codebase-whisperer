
-- Harden has_role: callers may only query their own role unless they are admin
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Allow callers to check only their own roles; admins may check any user.
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;

  IF _user_id <> auth.uid() AND NOT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'
  ) THEN
    RETURN FALSE;
  END IF;

  RETURN EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  );
END;
$$;

-- Revoke direct execute on trigger-only helpers (they still execute via triggers)
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.validate_blog_comment_author() FROM PUBLIC, anon, authenticated;
