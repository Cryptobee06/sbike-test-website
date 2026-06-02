"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "@/contexts/LanguageContext";

export default function BrandFAQ({ brand }) {
  const t = useTranslations("guide.faq");
  const locale = useLocale();
  const [openItems, setOpenItems] = useState(new Set());
  const faqData = brand?.faq || [];

  if (!faqData || faqData.length === 0) {
    return null;
  }

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("title")}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const itemId = item.id || index;
            const isOpen = openItems.has(itemId);
            return (
              <div
                key={itemId}
                className={`bg-white rounded-2xl shadow-card transition-all duration-300 border ${
                  isOpen ? "border-primary-300 shadow-emerald-sm" : "border-gray-100 hover:border-primary-200"
                }`}
              >
                <button
                  onClick={() => toggleItem(itemId)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-primary-700' : 'text-gray-800'}`}>
                    {item.question[locale]}
                  </span>
                  <span className={`ml-4 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      {isOpen
                        ? <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        : <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      }
                    </svg>
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[800px] opacity-100 pb-4 sm:pb-5 px-4 sm:px-6" : "max-h-0 opacity-0 px-4 sm:px-6 pb-0"}`}>
                  <div className="text-gray-600 leading-relaxed text-xs sm:text-sm border-t border-gray-100 pt-4">
                    {Array.isArray(item.answer[locale]) ? (
                      item.answer[locale].map((line, i) => (
                        <p key={i} className={line.trim().startsWith('-') || line.trim().startsWith('•') ? "ml-4 mt-1" : "mt-2"}>
                          {line}
                        </p>
                      ))
                    ) : (
                      <p>{item.answer[locale]}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
