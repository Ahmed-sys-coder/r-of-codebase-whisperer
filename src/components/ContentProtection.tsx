import { useEffect } from "react";

// Frontend copy protection only prevents casual copying.
// Browser-rendered content cannot be fully protected from advanced users.
const ContentProtection = () => {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Allow context menu inside form fields so users can paste/select
      if (target && target.closest("input, textarea, [contenteditable='true']")) return;
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img"))) {
        e.preventDefault();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      if (mod && !e.shiftKey && (key === "s" || key === "u")) {
        e.preventDefault();
        return;
      }
      if (mod && e.shiftKey && (key === "i" || key === "c" || key === "j")) {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
};

export default ContentProtection;
