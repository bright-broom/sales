"use client";

import { faqData } from "@/data/faq";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            よくある質問
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:p-8">
          <Accordion>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
