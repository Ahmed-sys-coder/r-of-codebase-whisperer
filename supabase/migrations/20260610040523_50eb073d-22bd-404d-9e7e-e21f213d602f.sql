DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_messages;

GRANT SELECT, UPDATE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
GRANT ALL ON public.contact_submission_attempts TO service_role;
REVOKE INSERT ON public.contact_messages FROM anon, authenticated, PUBLIC;
REVOKE ALL ON public.contact_submission_attempts FROM anon, authenticated, PUBLIC;