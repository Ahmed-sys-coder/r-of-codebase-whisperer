import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Plus,
  Trash2,
  PanelLeftClose,
  PanelLeftOpen,
  User,
  MessageSquare,
} from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

const suggestedPrompts = [
  {
    title: "Build a custom SaaS",
    subtitle: "Discuss requirements for a tailored SaaS product.",
    prompt: "I want to build a custom SaaS product. Can you guide me through the process?",
  },
  {
    title: "Integrate AI into my app",
    subtitle: "Add AI assistants, automation, or analytics.",
    prompt: "How can Code Envision help integrate AI into my existing application?",
  },
  {
    title: "Get a project estimate",
    subtitle: "Share scope and receive a tailored estimate.",
    prompt: "I'd like a rough estimate for a new web application project.",
  },
  {
    title: "Explore your services",
    subtitle: "Custom software, MVPs, integrations, and more.",
    prompt: "Tell me about the services Code Envision Technologies offers.",
  },
];

const botResponses: Record<string, string> = {
  "I want to build a custom SaaS product. Can you guide me through the process?":
    "Absolutely! We typically start with a discovery session to map your vision, users, and core workflows, then move to architecture, MVP design, and iterative delivery. Share your idea or email info.codeenvision@gmail.com to begin.",
  "How can Code Envision help integrate AI into my existing application?":
    "We integrate LLMs, custom AI agents, RAG pipelines, automation workflows, and analytics directly into your existing product. Tell us about your stack and goals and we'll propose the best approach.",
  "I'd like a rough estimate for a new web application project.":
    "Happy to help. Share the project scope, expected users, key features, and any deadlines — we'll come back with a tailored estimate within 24 hours.",
  "Tell me about the services Code Envision Technologies offers.":
    "We offer Custom Software Development, AI & Automation, SaaS Product Engineering, Enterprise Web Apps, API Integrations, and MVP Development. Which area interests you most?",
};

const defaultResponse =
  "Thanks for reaching out! Our team will review your message and follow up shortly. For immediate assistance, email info.codeenvision@gmail.com.";

const greetingMessage = (): Message => ({
  id: Date.now(),
  text: "Hi! 👋 I'm Code Envision AI. Ask me about our services, your project idea, or how we can help your business grow.",
  sender: "bot",
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
});

const newSession = (): ChatSession => ({
  id: `session-${Date.now()}`,
  title: "New chat",
  messages: [greetingMessage()],
});

const ChatWidget = () => {
  const { isOpen, toggleChatbot, closeChatbot } = useChatbot();
  const [sessions, setSessions] = useState<ChatSession[]>(() => [newSession()]);
  const [activeId, setActiveId] = useState<string>(() => sessions[0].id);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const active = sessions.find((s) => s.id === activeId) ?? sessions[0];
  const messages = active?.messages ?? [];

  // Lock background scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 250);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChatbot();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeChatbot]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const updateActive = (updater: (s: ChatSession) => ChatSession) => {
    setSessions((prev) => prev.map((s) => (s.id === activeId ? updater(s) : s)));
  };

  const sendMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = { id: Date.now(), text: value, sender: "user", time: now };

    updateActive((s) => ({
      ...s,
      title: s.messages.length <= 1 ? value.slice(0, 40) : s.title,
      messages: [...s.messages, userMsg],
    }));
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = botResponses[value] || defaultResponse;
      const botMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      updateActive((s) => ({ ...s, messages: [...s.messages, botMsg] }));
      setIsTyping(false);
    }, 900);
  };

  const handleNewChat = () => {
    const s = newSession();
    setSessions((prev) => [s, ...prev]);
    setActiveId(s.id);
  };

  const handleClearChat = () => {
    updateActive((s) => ({ ...s, title: "New chat", messages: [greetingMessage()] }));
  };

  const showWelcome = messages.length <= 1;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChatbot}
        className="group fixed z-40 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer"
        style={{
          width: "clamp(56px, 4vw, 68px)",
          height: "clamp(56px, 4vw, 68px)",
          right: "clamp(18px, 3.5vw, 40px)",
          bottom: "clamp(24px, 4vh, 40px)",
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
          boxShadow: "0 12px 32px rgba(37, 99, 235, 0.35)",
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Code Envision AI"
      >
        <MessageCircle size={26} />
      </motion.button>

      {/* Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="ce-ai-overlay"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 flex flex-col"
            style={{
              zIndex: 9999,
              width: "100vw",
              height: "100vh",
              background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Code Envision AI"
          >
            {/* Top Header */}
            <header
              className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b bg-white/80 backdrop-blur-md"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => setSidebarOpen((v) => !v)}
                  className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Toggle sidebar"
                >
                  {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
                </button>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">Code Envision AI</p>
                    <p className="text-[11px] text-slate-500">Your enterprise AI assistant</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleNewChat}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-white transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                >
                  <Plus size={14} /> New Chat
                </button>
                <button
                  onClick={handleClearChat}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <Trash2 size={14} /> Clear Chat
                </button>
                <button
                  onClick={closeChatbot}
                  className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Body */}
            <div className="flex-1 flex min-h-0">
              {/* Sidebar */}
              <AnimatePresence initial={false}>
                {sidebarOpen && (
                  <motion.aside
                    key="sidebar"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 280, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="hidden md:flex flex-col border-r bg-slate-50/60 overflow-hidden shrink-0"
                    style={{ borderColor: "#e2e8f0" }}
                  >
                    <div className="p-3">
                      <button
                        onClick={handleNewChat}
                        className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg text-white transition-all hover:shadow-md"
                        style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                      >
                        <Plus size={16} /> New chat
                      </button>
                    </div>
                    <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Recent
                    </div>
                    <div className="flex-1 overflow-y-auto px-2 pb-3 space-y-1">
                      {sessions.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveId(s.id)}
                          className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors truncate ${
                            s.id === activeId
                              ? "bg-white shadow-sm text-slate-900 border border-slate-200"
                              : "text-slate-600 hover:bg-white/70"
                          }`}
                        >
                          <MessageSquare size={14} className="shrink-0 text-slate-400" />
                          <span className="truncate">{s.title}</span>
                        </button>
                      ))}
                    </div>
                    <div className="p-3 border-t text-[11px] text-slate-500" style={{ borderColor: "#e2e8f0" }}>
                      Powered by Code Envision Technologies
                    </div>
                  </motion.aside>
                )}
              </AnimatePresence>

              {/* Chat area */}
              <main className="flex-1 flex flex-col min-w-0">
                <div className="flex-1 overflow-y-auto">
                  <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10">
                    {showWelcome ? (
                      <div className="flex flex-col items-center text-center pt-6 sm:pt-10">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5"
                          style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                        >
                          <Sparkles size={26} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          How can I help you today?
                        </h2>
                        <p className="mt-2 text-sm text-slate-500 max-w-md">
                          Ask about our services, share a project idea, or pick a prompt below to get started.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 mt-8 w-full max-w-2xl">
                          {suggestedPrompts.map((p) => (
                            <button
                              key={p.title}
                              onClick={() => sendMessage(p.prompt)}
                              className="text-left p-4 rounded-xl border bg-white hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-0.5"
                              style={{ borderColor: "#e2e8f0" }}
                            >
                              <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                              <p className="text-xs text-slate-500 mt-1">{p.subtitle}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white ${
                                msg.sender === "user" ? "" : ""
                              }`}
                              style={{
                                background:
                                  msg.sender === "bot"
                                    ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                                    : "#0f172a",
                              }}
                            >
                              {msg.sender === "bot" ? <Sparkles size={14} /> : <User size={14} />}
                            </div>
                            <div className={`max-w-[85%] ${msg.sender === "user" ? "items-end" : ""}`}>
                              <div
                                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                  msg.sender === "user"
                                    ? "text-white rounded-tr-md"
                                    : "bg-white text-slate-800 border rounded-tl-md"
                                }`}
                                style={
                                  msg.sender === "user"
                                    ? { background: "linear-gradient(135deg, #2563eb, #7c3aed)" }
                                    : { borderColor: "#e2e8f0" }
                                }
                              >
                                {msg.text}
                              </div>
                              <p
                                className={`text-[10px] mt-1 text-slate-400 ${
                                  msg.sender === "user" ? "text-right" : ""
                                }`}
                              >
                                {msg.time}
                              </p>
                            </div>
                          </motion.div>
                        ))}

                        {isTyping && (
                          <div className="flex gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                            >
                              <Sparkles size={14} />
                            </div>
                            <div
                              className="px-4 py-3 rounded-2xl bg-white border flex items-center gap-1"
                              style={{ borderColor: "#e2e8f0" }}
                            >
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        )}
                        <div ref={bottomRef} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Input */}
                <div className="border-t bg-white/80 backdrop-blur-md" style={{ borderColor: "#e2e8f0" }}>
                  <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-4">
                    <div
                      className="flex items-end gap-2 p-2 rounded-2xl border bg-white shadow-sm focus-within:border-blue-400 focus-within:shadow-md transition-all"
                      style={{ borderColor: "#e2e8f0" }}
                    >
                      <textarea
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage(input);
                          }
                        }}
                        rows={1}
                        placeholder="Message Code Envision AI..."
                        className="flex-1 resize-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none px-3 py-2 max-h-40"
                      />
                      <button
                        onClick={() => sendMessage(input)}
                        disabled={!input.trim()}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:shadow-md"
                        style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                        aria-label="Send message"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Code Envision AI may produce inaccurate information. Verify important details with our team.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;