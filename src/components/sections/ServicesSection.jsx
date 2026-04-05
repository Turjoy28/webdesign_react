import { useEffect, useRef, useState } from "react";
import {
  servicesData,
  servicesReviewHighlights,
  servicesSectionContent,
} from "../../data/servicesData";

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [hideProgress, setHideProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const fadeStart = viewportHeight * 0.72;
      const fadeEnd = -rect.height * 0.55;
      const progress = (fadeStart - rect.top) / (fadeStart - fadeEnd);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const easedProgress = Math.pow(clampedProgress, 1.55);

      setHideProgress(easedProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const panelStyle = {
    transform: `translate3d(0, ${hideProgress * 34}px, 0)`,
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 pb-14 pt-8 sm:pb-18 sm:pt-10 lg:pb-0 lg:pt-12"
    >
      <div
        className="relative mx-4 overflow-hidden rounded-[28px] bg-black px-5 py-16 transition-[transform,opacity,filter] duration-500 will-change-transform sm:mx-5 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:mx-4 xl:px-16"
        style={panelStyle}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.03),transparent_38%)]" />

        <div className="mx-auto max-w-[1058px]">
          <div
            className={[
              "mx-auto max-w-[660px] text-center transition-all duration-[900ms]",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            ].join(" ")}
          >
            <h2 className="font-['Funnel_Display'] text-[clamp(4.6rem,9vw,7.9rem)] font-normal leading-[0.84] tracking-[-0.095em] text-white">
              {servicesSectionContent.titlePrimary}
            </h2>
            <p className="mt-0.5 font-['Funnel_Display'] text-[clamp(4.6rem,9vw,7.9rem)] font-normal leading-[0.82] tracking-[-0.095em] text-white/22">
              {servicesSectionContent.titleSecondary}
            </p>
          </div>

          <div className="mt-16 border-t border-white/10">
            {servicesData.map((service, index) => {
              const isOpen = index === activeServiceIndex;

              return (
                <article
                  key={service.id}
                  className={[
                    "border-b border-white/10 transition-all duration-700",
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  ].join(" ")}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    className="grid w-full grid-cols-[56px_minmax(0,1fr)] items-center gap-5 py-6 text-left sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[84px_minmax(0,1fr)] lg:gap-10"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={[
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[22px] leading-none transition-colors duration-300",
                        isOpen
                          ? "border-white/14 bg-white/[0.05] text-white"
                          : "border-white/10 text-white/90",
                      ].join(" ")}
                    >
                      {isOpen ? "-" : "+"}
                    </span>

                    <span className="font-['Funnel_Display'] text-[1rem] font-normal tracking-[-0.045em] text-white sm:text-[1.1rem] lg:text-[1.14rem]">
                      {service.title}
                    </span>
                  </button>

                  <div
                    className={[
                      "grid overflow-hidden transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-7 pt-0.5 sm:pl-[72px] lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-14 lg:pr-7">
                        <div className="max-w-[520px]">
                          <p className="max-w-[520px] text-[0.97rem] leading-[1.52] tracking-[-0.02em] text-white/45">
                            {service.description}
                          </p>

                          <div className="mt-7 flex max-w-[320px] flex-wrap gap-2.5">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-white/[0.09] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.02em] text-white/88"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="relative">
                          <div className="overflow-hidden rounded-[18px] bg-white/[0.02] ring-1 ring-white/[0.04]">
                          <img
                            src={service.image}
                            alt={service.alt}
                            className={[
                                "h-[188px] w-full object-cover object-center transition-all duration-700 lg:h-[196px]",
                              isOpen
                                ? "scale-100 opacity-100"
                                : "scale-[1.035] opacity-90",
                            ].join(" ")}
                          />
                          </div>
                          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 text-white/20 xl:flex">
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className={[
              "mt-8 transition-all duration-700 sm:pl-[72px]",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: "320ms" }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition duration-300 hover:opacity-75"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg leading-none text-black">
                +
              </span>
              <span>{servicesSectionContent.bottomAction}</span>
            </button>
          </div>

          <div
            className={[
              "mt-20 border-t border-white/[0.06] pt-7 transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: "420ms" }}
          >
            <div className="flex gap-10 overflow-x-auto pb-1 text-white/95 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-between">
              {servicesReviewHighlights.map((item) => (
                <div
                  key={item.id}
                  className="flex min-w-fit items-center gap-3.5 whitespace-nowrap"
                >
                  <img
                    src={item.avatar}
                    alt={item.alt}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <p className="font-['Funnel_Display'] text-[1.05rem] tracking-[-0.04em] text-white/92">
                    <span className="text-white/55">&ldquo;</span> {item.quote}{" "}
                    <span className="text-white/55">&rdquo;</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
