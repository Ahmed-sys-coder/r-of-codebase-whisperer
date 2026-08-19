import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import usePageTitle from "@/hooks/usePageTitle";
import { toast } from "sonner";
import {
  Search, Mail, Phone, Building2, Calendar, Eye, EyeOff, Loader2, Inbox, AlertCircle, X,
} from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  company: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

type Filter = "all" | "read" | "unread";
type Sort = "newest" | "oldest";

const AdminContactMessages = () => {
  usePageTitle("Contact Messages");
  const qc = useQueryClient();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("newest");
  const [selected, setSelected] = useState<Message | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["contact_messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_messages" as any)
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as Message[];
    },
  });

  const toggleRead = useMutation({
    mutationFn: async ({ id, is_read }: { id: string; is_read: boolean }) => {
      const { error } = await (supabase as any)
        .from("contact_messages")
        .update({ is_read })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contact_messages"] });
    },
    onError: () => toast.error("Couldn't update status"),
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data
      .filter((m) => {
        if (filter === "read" && !m.is_read) return false;
        if (filter === "unread" && m.is_read) return false;
        if (!q) return true;
        return [m.name, m.email, m.subject ?? "", m.message]
          .some((s) => s.toLowerCase().includes(q));
      })
      .sort((a, b) => {
        const da = new Date(a.created_at).getTime();
        const db = new Date(b.created_at).getTime();
        return sort === "newest" ? db - da : da - db;
      });
  }, [data, query, filter, sort]);

  const unreadCount = data?.filter((m) => !m.is_read).length ?? 0;
  const totalCount = data?.length ?? 0;

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contact Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {totalCount} total · {unreadCount} unread
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="glass rounded-xl p-4 mb-5 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, subject, or message…"
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground outline-none focus:border-primary/40"
          />
        </div>
        <div className="flex items-center gap-1 bg-background border border-border rounded-lg p-1">
          {(["all", "unread", "read"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${
                filter === f ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground outline-none"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={24} />
        </div>
      ) : isError ? (
        <div className="glass rounded-xl p-10 text-center">
          <AlertCircle className="mx-auto mb-3 text-destructive" size={28} />
          <p className="text-sm text-foreground mb-3">Couldn't load messages.</p>
          <button onClick={() => refetch()} className="text-xs text-primary hover:underline">
            Retry
          </button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="glass rounded-xl p-10 text-center">
          <Inbox className="mx-auto mb-3 text-muted-foreground" size={28} />
          <p className="text-sm text-muted-foreground">No messages found.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setSelected(m);
                if (!m.is_read) toggleRead.mutate({ id: m.id, is_read: true });
              }}
              className={`w-full text-left glass rounded-xl p-4 hover:bg-[hsl(0_0%_100%/0.04)] transition-colors flex items-start gap-4 ${
                !m.is_read ? "border-l-2 border-l-primary" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {!m.is_read && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">New</span>
                  )}
                  <p className="text-sm font-semibold text-foreground truncate">{m.name}</p>
                  <span className="text-xs text-muted-foreground truncate">· {m.email}</span>
                </div>
                {m.subject && (
                  <p className="text-xs text-foreground/80 mb-1 truncate">{m.subject}</p>
                )}
                <p className="text-xs text-muted-foreground line-clamp-2">{m.message}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] text-muted-foreground whitespace-nowrap">
                  {new Date(m.created_at).toLocaleDateString()}
                </p>
                <p className="text-[10px] text-muted-foreground/70">
                  {new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="flex items-start justify-between p-5 border-b border-border">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{selected.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {new Date(selected.created_at).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-5 space-y-3 overflow-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-muted-foreground" />
                  <a href={`mailto:${selected.email}`} className="text-foreground hover:underline truncate">
                    {selected.email}
                  </a>
                </div>
                {selected.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-muted-foreground" />
                    <a href={`tel:${selected.phone}`} className="text-foreground hover:underline">
                      {selected.phone}
                    </a>
                  </div>
                )}
                {selected.company && (
                  <div className="flex items-center gap-2">
                    <Building2 size={13} className="text-muted-foreground" />
                    <span className="text-foreground truncate">{selected.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-muted-foreground" />
                  <span className="text-foreground">
                    {new Date(selected.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
              {selected.subject && (
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Subject</p>
                  <p className="text-sm text-foreground">{selected.subject}</p>
                </div>
              )}
              <div className="pt-2">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Message</p>
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>
            </div>
            <div className="p-4 border-t border-border flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  toggleRead.mutate(
                    { id: selected.id, is_read: !selected.is_read },
                    { onSuccess: () => setSelected({ ...selected, is_read: !selected.is_read }) }
                  );
                }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {selected.is_read ? <EyeOff size={13} /> : <Eye size={13} />}
                Mark as {selected.is_read ? "unread" : "read"}
              </button>
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject || "Your message")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mail size={13} /> Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminContactMessages;
