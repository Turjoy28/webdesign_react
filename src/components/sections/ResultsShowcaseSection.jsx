import { useEffect, useMemo, useRef, useState } from "react";
import Container from "../layout/Container";
import {
  resultsShowcaseContent,
  showcaseLogoItems,
} from "../../data/resultsShowcaseData";

const clamp = (value) => Math.min(Math.max(value, 0), 1);

const useCountUp = (endValue, isActive, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    let frameId = 0;
    let startTime = 0;

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = clamp((timestamp - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(endValue * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frameId);
  }, [duration, endValue, isActive]);

  return value;
};

const ResultsShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headingWords = useMemo(
    () => resultsShowcaseContent.headline.split(" "),
    [],
  );

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

  useEffect(() => {
    const updateScrollProgress = () => {
      const node = sectionRef.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.45);

      setScrollProgress(clamp(progress));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const projectsCount = useCountUp(resultsShowcaseContent.statCard.value, isVisible);
  const basesCount = useCountUp(resultsShowcaseContent.baseCard.value, isVisible, 1600);
  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";
  const cardRevealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-12 opacity-0";
  const transitionStyle = (delay) => ({ transitionDelay: `${delay}ms` });
  const sectionRevealProgress = clamp((scrollProgress + 0.02) / 0.68);
  const sectionStyle = {
    transform: `translate3d(0, ${(1 - sectionRevealProgress) * 138}px, 0)`,
  };
  const imageStyle = {
    transform: `translate3d(0, ${(1 - scrollProgress) * 54}px, 0) scale(${0.94 + scrollProgress * 0.06})`,
  };
  const packageStyle = {
    transform: `translate3d(0, ${(1 - scrollProgress) * 26}px, 0)`,
  };
  const baseCardStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.74) 100%), url(${resultsShowcaseContent.baseCard.image})`,
    backgroundSize: `${118 + scrollProgress * 12}%`,
    backgroundPosition: "center",
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 border-b border-slate-200 bg-[#f5f5f5] px-0 pt-[5.5rem] pb-[4.5rem] shadow-[0_-24px_80px_rgba(15,23,42,0.04)] will-change-transform sm:-mt-10 sm:pt-[6.5rem] sm:pb-[5.5rem] lg:-mt-[220px] lg:pt-[292px] lg:pb-28"
      style={sectionStyle}
    >
      <Container className="max-w-[1110px]">
        <div className="grid gap-x-[74px] gap-y-10 xl:grid-cols-[440px_minmax(0,1fr)] xl:items-start">
          <div
            className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
            style={transitionStyle(40)}
          >
            <div className="overflow-hidden rounded-[30px] bg-[#d7cfc6] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img
                src={resultsShowcaseContent.leadImage}
                alt={resultsShowcaseContent.leadAlt}
                className="h-[500px] w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[600px]"
                style={imageStyle}
              />
            </div>
          </div>

          <div>
            <p
              className={`text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 transition-all duration-700 ${revealClass}`}
              style={transitionStyle(120)}
            >
              {resultsShowcaseContent.eyebrow}
            </p>

            <h2 className="mt-5 max-w-[560px] text-[clamp(2.45rem,4.7vw,4.35rem)] font-['Funnel_Display'] font-normal leading-[1.01] tracking-[-0.065em] text-slate-950">
              {headingWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="mr-[0.18em] inline-flex overflow-hidden pb-[0.08em]"
                >
                  <span
                    className={[
                      "inline-block transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isVisible
                        ? "translate-x-0 opacity-100 blur-0"
                        : "translate-x-8 opacity-0 blur-[6px]",
                    ].join(" ")}
                    style={transitionStyle(140 + index * 38)}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <article
                className={`rounded-[20px] bg-white px-6 py-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${cardRevealClass}`}
                style={transitionStyle(260)}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="max-w-[150px] text-[14px] leading-7 text-slate-500">
                    {resultsShowcaseContent.statCard.label}
                  </p>
                  <p className="font-['Funnel_Display'] text-[3rem] font-normal leading-none tracking-[-0.08em] text-slate-950">
                    {projectsCount}
                    {resultsShowcaseContent.statCard.suffix}
                  </p>
                </div>
              </article>

              <article
                className={`row-span-2 rounded-[20px] bg-white px-6 py-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${cardRevealClass}`}
                style={transitionStyle(340)}
              >
                <div className="flex gap-2 text-[14px] text-orange-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>

                <p className="mt-2 font-['Funnel_Display'] text-[4rem] font-normal leading-[0.95] tracking-[-0.09em] text-slate-950">
                  {resultsShowcaseContent.ratingCard.rating}
                </p>

                <div className="my-6 border-t border-slate-200" />

                <p className="max-w-[250px] text-[15px] leading-8 text-slate-500">
                  {resultsShowcaseContent.ratingCard.copy}
                </p>

                <button
                  type="button"
                  className="group mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-950 transition hover:opacity-80"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-base text-white transition-transform duration-300 group-hover:rotate-90">
                    +
                  </span>
                  <span>{resultsShowcaseContent.ratingCard.cta}</span>
                </button>
              </article>

              <article
                className={`overflow-hidden rounded-[20px] bg-[#0f0f10] px-6 py-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.16)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${cardRevealClass}`}
                style={transitionStyle(420)}
              >
                <div
                  className="relative h-[176px] overflow-hidden rounded-[18px] bg-white/6 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={packageStyle}
                >
                  {resultsShowcaseContent.projectCard.packageImages.map((image, index) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className={[
                        "absolute h-[120px] w-[100px] rounded-[16px] object-cover shadow-[0_20px_35px_rgba(0,0,0,0.28)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        image.className,
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0",
                      ].join(" ")}
                      style={transitionStyle(520 + index * 110)}
                    />
                  ))}
                </div>

                <p className="mt-7 max-w-[220px] font-['Funnel_Display'] text-[1.6rem] leading-[1.08] tracking-[-0.05em]">
                  {resultsShowcaseContent.projectCard.title}
                </p>
                <p className="mt-3 max-w-[260px] text-[15px] leading-7 text-white/58">
                  {resultsShowcaseContent.projectCard.copy}
                </p>
              </article>

              <article
                className={`sm:col-span-2 sm:max-w-[270px] overflow-hidden rounded-[18px] px-5 py-5 text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${cardRevealClass}`}
                style={{
                  ...transitionStyle(500),
                  ...baseCardStyle,
                }}
              >
                <div className="flex items-end justify-between gap-5">
                  <p className="max-w-[130px] text-[14px] leading-7 text-white/88">
                    {resultsShowcaseContent.baseCard.title}
                  </p>
                  <p className="font-['Funnel_Display'] text-[3rem] font-normal leading-none tracking-[-0.08em]">
                    {basesCount}
                    {resultsShowcaseContent.baseCard.suffix}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
          style={transitionStyle(260)}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
              {resultsShowcaseContent.happyUsersLabel}
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-400">
              {resultsShowcaseContent.footerNote}
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {showcaseLogoItems.map((item, index) => (
              <article
                key={item.id}
                className={[
                  "flex min-h-[156px] items-center justify-center px-8 py-10 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  index < showcaseLogoItems.length - 1 ? "border-b border-slate-200" : "",
                  index % 2 === 0 ? "sm:border-r sm:border-slate-200" : "",
                  index < 4 ? "lg:border-b lg:border-slate-200" : "",
                  index % 4 !== 3 ? "lg:border-r lg:border-slate-200" : "",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                ].join(" ")}
                style={transitionStyle(380 + index * 55)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-auto w-full object-contain"
                  style={{ maxWidth: `${item.width}px` }}
                />
              </article>
            ))}
            <article
              className={[
                "flex min-h-[156px] flex-col justify-center gap-3 px-8 py-10 transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              ].join(" ")}
              style={transitionStyle(770)}
            >
              <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
                Next can be you.
              </p>
              <a
                href="#contact"
                className="font-['Funnel_Display'] text-[1.28rem] font-medium tracking-[-0.04em] text-slate-950 transition hover:opacity-70"
              >
                Let&apos;s talk
              </a>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResultsShowcaseSection;
