import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  intro?: string;
  faqs: FAQItem[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  intro,
  faqs,
}: FAQSectionProps) => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative z-10 px-4 sm:px-6 py-20 md:py-28"
    >
      <div
        className="w-full max-w-[1180px] mx-auto rounded-[28px] border border-[hsl(217_91%_55%/0.18)] px-5 sm:px-10 md:px-16 py-12 md:py-16"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 100% / 0.95) 0%, hsl(217 91% 55% / 0.05) 100%)",
          boxShadow:
            "0 24px 60px -24px hsl(217 91% 55% / 0.22), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
        }}
      >
        <div className="text-center mb-10 md:mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span style={{ color: "hsl(220 78% 22%)" }}>Frequently Asked </span>
            <span style={{ color: "hsl(220 86% 42%)" }}>Questions</span>
          </h2>
          {intro && (
            <p className="mt-4 text-[15px] md:text-base text-[hsl(215_16%_40%)] max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto flex flex-col gap-3 md:gap-4">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="group border border-[hsl(217_91%_55%/0.18)] rounded-2xl bg-white px-5 md:px-6 transition-all duration-300 hover:border-[hsl(220_86%_42%/0.55)] hover:shadow-[0_14px_32px_-16px_hsl(258_90%_66%/0.35)] data-[state=open]:border-[hsl(220_86%_42%/0.6)] data-[state=open]:shadow-[0_18px_40px_-18px_hsl(258_90%_66%/0.4)]"
              style={{ boxShadow: "0 4px 14px -8px hsl(217 91% 55% / 0.12)" }}
            >
              <AccordionTrigger className="text-left text-[15px] md:text-base font-semibold py-4 md:py-5 text-[hsl(222_47%_11%)] hover:no-underline [&>svg]:text-[hsl(220_86%_42%)] [&>svg]:h-5 [&>svg]:w-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[hsl(215_16%_40%)] leading-[1.75] pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const buildFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});

export default FAQSection;
