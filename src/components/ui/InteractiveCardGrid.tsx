import { forwardRef, type HTMLAttributes, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * InteractiveCardGrid — wrapper that activates the sibling shrink/dim
 * effect on hover/focus of any child marked with `interactive-card`.
 *
 * Uses pure-CSS :has() / :focus-within for performance; disables on
 * touch / reduced-motion via media queries in index.css.
 */
interface GridProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  children: ReactNode;
}

export const InteractiveCardGrid = forwardRef<HTMLDivElement, GridProps>(
  ({ as: Tag = "div", className, children, ...rest }, ref) => {
    const Comp: any = Tag;
    return (
      <Comp ref={ref} className={cn("interactive-grid", className)} {...rest}>
        {children}
      </Comp>
    );
  }
);
InteractiveCardGrid.displayName = "InteractiveCardGrid";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  children: ReactNode;
}

export const InteractiveHoverCard = forwardRef<HTMLDivElement, CardProps>(
  ({ as: Tag = "div", className, children, ...rest }, ref) => {
    const Comp: any = Tag;
    return (
      <Comp
        ref={ref}
        tabIndex={rest.tabIndex ?? 0}
        className={cn("interactive-card", className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);
InteractiveHoverCard.displayName = "InteractiveHoverCard";

export default InteractiveCardGrid;
