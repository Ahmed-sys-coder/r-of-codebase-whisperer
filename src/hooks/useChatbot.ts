import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ChatbotContextValue {
  isOpen: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
  toggleChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextValue | null>(null);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openChatbot = useCallback(() => setIsOpen(true), []);
  const closeChatbot = useCallback(() => setIsOpen(false), []);
  const toggleChatbot = useCallback(() => setIsOpen((v) => !v), []);
  return React.createElement(
    ChatbotContext.Provider,
    { value: { isOpen, openChatbot, closeChatbot, toggleChatbot } },
    children
  );
};

export const useChatbot = (): ChatbotContextValue => {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error('useChatbot must be used within ChatbotProvider');
  return ctx;
};
