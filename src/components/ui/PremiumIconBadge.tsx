import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconTone = "purple" | "cyan" | "emerald" | "amber" | "rose";

interface Props {
  icon: LucideIcon;
  tone?: IconTone;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { box: "w-10 h-10", icon: 16 },
  md: { box: "w-12 h-12", icon: 20 },
  lg: { box: "w-14 h-14", icon: 24 },
};

const PremiumIconBadge = ({ icon: Icon, tone = "purple", size = "md", className }: Props) => {
  const s = sizeMap[size];
  const toneClass = tone === "purple" ? "" : `tone-${tone}`;
  return (
    <span className={cn("icon-badge shrink-0", s.box, toneClass, className)}>
      <Icon size={s.icon} strokeWidth={2} />
    </span>
  );
};

export default PremiumIconBadge;
