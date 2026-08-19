import * as React from "react";
import {
  Link as TSLink,
  useNavigate as useTSNavigate,
  useLocation as useTSLocation,
  useParams as useTSParams,
  useRouter,
} from "@tanstack/react-router";

/**
 * Compatibility layer that maps @/lib/router-compat's API onto
 * @tanstack/react-router so ported components can keep their imports
 * by swapping "@/lib/router-compat" -> "@/lib/router-compat".
 */

type AnyProps = Record<string, any>;

function resolveTo(to: string | { pathname?: string; search?: string; hash?: string }) {
  if (typeof to === "string") return to;
  return `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}`;
}

export const Link = React.forwardRef<HTMLAnchorElement, AnyProps>(function Link(
  { to, children, replace, state, ...rest },
  ref,
) {
  const href = resolveTo(to);
  // For hash links or absolute URLs, render a plain <a>
  if (href.startsWith("http") || href.startsWith("#") || href.includes("#")) {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <TSLink ref={ref as any} to={href} replace={replace} {...rest}>
      {children as any}
    </TSLink>
  );
});

export const NavLink = React.forwardRef<HTMLAnchorElement, AnyProps>(function NavLink(
  { to, children, className, end, ...rest },
  ref,
) {
  const href = resolveTo(to);
  return (
    <TSLink
      ref={ref as any}
      to={href}
      activeOptions={{ exact: !!end }}
      {...rest}
      className={
        typeof className === "function"
          ? ((state: any) => (className as any)({ isActive: state.isActive }))
          : className
      }
    >
      {typeof children === "function"
        ? (state: any) => (children as any)({ isActive: state.isActive })
        : (children as any)}
    </TSLink>
  );
});

export function useNavigate() {
  const nav = useTSNavigate();
  return React.useCallback(
    (to: string | number | { pathname?: string; search?: string; hash?: string }, opts?: { replace?: boolean }) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      const href = resolveTo(to);
      nav({ to: href, replace: opts?.replace });
    },
    [nav],
  );
}

export function useLocation() {
  const loc = useTSLocation();
  return {
    pathname: loc.pathname,
    search: loc.searchStr ?? "",
    hash: loc.hash ?? "",
    state: (loc.state as any) ?? null,
    key: loc.href,
  };
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  return (useTSParams as any)({ strict: false }) as T;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to, { replace });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);
  return null;
}

export type NavLinkProps = AnyProps;

// Stubs for things imported but not used at runtime in ported code
export const BrowserRouter = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Route = (_: any) => null;
export { useRouter };