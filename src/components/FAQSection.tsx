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
        className="w-full max-w-[1180px] mx-auto rounded-[28px] border border-[#8A08FA]/30 px-5 sm:px-10 md:px-16 py-12 md:py-16"
        style={{
          background: "#0A0A0A",
          boxShadow: "0 24px 60px -28px rgba(138,8,250,0.35)",
        }}
      >
        <div className="text-center mb-10 md:mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span style={{ color: "#FFFFFF" }}>Frequently Asked </span>
            <span style={{ color: "#B583FF" }}>Questions</span>
          </h2>
          {intro && (
            <p className="mt-4 text-[15px] md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto flex flex-col gap-3 md:gap-4">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="group border border-white/12 rounded-2xl bg-[#15151F] px-5 md:px-6 transition-all duration-300 hover:border-[#8A08FA]/55 data-[state=open]:border-[#8A08FA]/70 data-[state=open]:bg-[#17171F]"
            >
              <AccordionTrigger className="text-left text-[15px] md:text-base font-semibold py-4 md:py-5 text-white hover:no-underline [&>svg]:text-[#B583FF] [&>svg]:h-5 [&>svg]:w-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-neutral-300 leading-[1.75] pb-5">
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
