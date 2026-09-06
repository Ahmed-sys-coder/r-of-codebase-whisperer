import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ChatInput = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      })
    )
    .min(1)
    .max(30),
});

const SYSTEM_PROMPT = `You are "Code Envision AI", the website assistant for Code Envision Technologies — a Pakistan-based, remote-first software engineering company serving clients worldwide.

What the company does:
- Custom software development, SaaS product engineering, enterprise web and mobile apps
- AI & automation: AI chatbots, AI agents, RAG pipelines, NLP, computer vision, machine learning
- MVP development, CRM/ERP systems, API integrations, UI/UX design, SEO and ongoing support
- Industries: SaaS startups, education, e-commerce, real estate, healthcare, fintech, retail, business automation
- Selected work: legal AI research platform, trading analytics platform, POS/ERP/CRM platform, interior design studio management, park ticketing system, construction management portal
- Contact: info.codeenvision@gmail.com

How to answer:
- Be helpful, concrete and friendly; 2-5 short sentences, plain language, no markdown headings.
- Answer the visitor's actual question. Ask one clarifying question when the request is vague.
- Never invent prices, timelines, client names or guarantees. For quotes or estimates, ask about scope and invite them to email info.codeenvision@gmail.com.
- Stay on topics related to the company, its services, technology and the visitor's project.`;

export const askChatbot = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ChatInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) {
      return {
        reply:
          "Our assistant is offline right now. Please email info.codeenvision@gmail.com and our team will reply shortly.",
      };
    }

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "google/gemini-3.6-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
        stream: false,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[chatbot] gateway error", res.status, detail.slice(0, 500));
      const reply =
        res.status === 429
          ? "We're getting a lot of questions right now — please try again in a moment."
          : "I couldn't reach the assistant just now. Please try again, or email info.codeenvision@gmail.com.";
      return { reply };
    }

    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply =
      json.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I didn't catch that. Could you rephrase your question?";

    return { reply };
  });
