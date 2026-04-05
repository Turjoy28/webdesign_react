import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { faqData, faqSectionContent } from "../../data/faqData";

const ToggleIcon = ({ isOpen }) => {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
      <svg
        viewBox="0 0 12 12"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M2.2 6h7.6" />
        {!isOpen && <path d="M6 2.2v7.6" />}
      </svg>
    </span>
  );
};

const FaqAccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <article className="overflow-hidden rounded-[14px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5"
        aria-expanded={isOpen}
      >
        <span className="text-[1rem] font-medium tracking-[-0.03em] text-slate-950 sm:text-[1.04rem]">
          {item.question}
        </span>
        <ToggleIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-4 px-4 pb-4 pt-1 sm:grid-cols-[132px_minmax(0,1fr)] sm:px-5 sm:pb-5">
            <div className="overflow-hidden rounded-[14px] bg-slate-100">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-[86px] w-full object-cover sm:h-[88px]"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = item.imageFallback;
                }}
              />
            </div>

            <div className="flex flex-col">
              <p className="max-w-[430px] text-[14px] leading-[1.7] text-slate-500">
                {item.answer}
              </p>

              <a
                href={item.ctaHref}
                className="group mt-4 inline-flex items-center gap-3 self-start text-[11px] font-semibold uppercase tracking-[0.07em] text-slate-900"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105">
                  +
                </span>
                <span>{item.ctaLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const FAQSection = () => {
  const sectionRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-[#f5f5f5] py-[4.75rem] sm:py-[5.75rem] lg:py-28"
    >
      <Container className="max-w-[1110px]">
        <div className="border-t border-slate-200 pt-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
            {faqSectionContent.label}
          </p>
        </div>

        <div className="mt-7 grid gap-x-14 gap-y-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div
            className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:pt-[12.5rem] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className="max-w-[220px]">
              <p className="text-[14px] leading-[1.65] text-slate-400">
                {faqSectionContent.supportCopy}{" "}
                <a
                  href={faqSectionContent.supportLinkHref}
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 transition hover:text-slate-950"
                >
                  {faqSectionContent.supportLinkLabel}
                </a>
              </p>

              <div className="mt-6 overflow-hidden rounded-[18px] shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
                <img
                  src={faqSectionContent.supportImage}
                  alt={faqSectionContent.supportImageAlt}
                  className="h-[160px] w-full object-cover sm:h-[190px]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = faqSectionContent.supportImageFallback;
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <div
              className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="max-w-[470px] font-['Funnel_Display'] text-[clamp(2.45rem,4.5vw,4.1rem)] font-normal leading-[1.04] tracking-[-0.07em] text-slate-950">
                {faqSectionContent.title}
              </h2>
            </div>

            <div className="mt-9 space-y-2.5">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + index * 70}ms` }}
                >
                  <FaqAccordionItem
                    item={item}
                    isOpen={index === activeFaq}
                    onClick={() =>
                      setActiveFaq(index === activeFaq ? -1 : index)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
