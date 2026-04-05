import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { awardsData, awardsSectionContent } from "../../data/awardsData";

const TrophySeal = () => {
  return (
    <div className="mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full border border-slate-200/80 bg-white/55 shadow-[0_10px_35px_rgba(15,23,42,0.03)] backdrop-blur-sm">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-slate-200/70 text-slate-200">
        <svg
          viewBox="0 0 48 48"
          className="h-9 w-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17 11h14v5a7 7 0 0 1-14 0v-5Z" />
          <path d="M20 29h8" />
          <path d="M24 23v6" />
          <path d="M18 35h12" />
          <path d="M14 13H9a5 5 0 0 0 5 6" />
          <path d="M34 13h5a5 5 0 0 1-5 6" />
        </svg>
      </div>
    </div>
  );
};

const AwardsSection = () => {
  const sectionRef = useRef(null);
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
      { threshold: 0.16 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="bg-[#f5f5f5] py-[4.75rem] sm:py-[5.75rem] lg:py-28"
    >
      <Container className="max-w-[1110px]">
        <div
          className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <TrophySeal />
        </div>

        <div className="mt-8 grid gap-x-14 gap-y-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <div
            className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-6 translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "90ms" }}
          >
            <figure className="max-w-[240px]">
              <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <img
                  src={awardsSectionContent.image}
                  alt={awardsSectionContent.imageAlt}
                  className="h-[240px] w-full object-cover sm:h-[320px]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = awardsSectionContent.imageFallback;
                  }}
                />
              </div>

              <figcaption className="pt-5 text-[12px] font-medium uppercase tracking-[0.05em] text-slate-700">
                {awardsSectionContent.label}
              </figcaption>
            </figure>
          </div>

          <div
            className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <h2 className="max-w-[670px] font-['Funnel_Display'] text-[clamp(2.45rem,4.6vw,4.2rem)] font-normal leading-[1.12] tracking-[-0.07em] text-slate-950">
              {awardsSectionContent.title}
            </h2>

            <div className="mt-12 border-t border-slate-200">
              {awardsData.map((award, index) => (
                <div
                  key={award.id}
                  className={`grid gap-3 border-b border-slate-200 py-5 text-[12px] font-medium uppercase tracking-[0.04em] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-[minmax(0,1.4fr)_minmax(120px,0.9fr)_88px] sm:items-center ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${230 + index * 90}ms` }}
                >
                  <p className="text-slate-800">{award.title}</p>
                  <p className="text-slate-400">{award.brand}</p>
                  <p className="text-slate-400 sm:text-right">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AwardsSection;
