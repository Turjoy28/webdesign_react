import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import {
  aboutIntroContent,
  aboutSocialLinks,
  impressionItems,
  reviewAvatars,
} from "../../data/aboutIntroData";

const FlokaMark = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 4h22v6H11v4h11v6H11v8H5V4Z" />
      <path d="M17 18h10v10H17v-4h4v-2h-4v-4Z" />
    </svg>
  );
};

const OrbitStamp = () => {
  return (
    <div className="relative flex h-[88px] w-[88px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-slate-200/90" />
      <div className="absolute inset-[7px] rounded-full border border-slate-200/65" />
      <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-white">
        <FlokaMark className="h-[28px] w-[28px] text-slate-950" />
      </div>
      <svg
        viewBox="0 0 88 88"
        className="absolute inset-0 h-full w-full text-slate-300/75"
        aria-hidden="true"
      >
        <defs>
          <path
            id="about-orbit-path"
            d="M44,44 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0"
          />
        </defs>
        <text fill="currentColor" fontSize="5.6" fontWeight="600" letterSpacing="1.8">
          <textPath href="#about-orbit-path" startOffset="0%">
            DO MORE WITH FLOKA DO MORE WITH FLOKA
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const AwardBadge = ({ item, isVisible, delay, stars = false }) => {
  return (
    <div
      className={`flex items-center gap-2.5 text-right transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg
        viewBox="0 0 20 48"
        className="h-[38px] w-[16px] shrink-0 text-white/92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M18 1c-4.5 3.3-7 7.2-7 11.6 0 5.5 4.1 7 4.1 11.3 0 2.9-1.8 4.8-4.1 6.9-2.4 2.2-4.1 4.6-4.1 8.3 0 2.7.8 5 2.2 7" />
      </svg>

      <div className="min-w-[104px] text-white">
        <p className="font-['Funnel_Display'] text-[1.18rem] font-medium leading-none tracking-[0.08em]">
          {item.title}
        </p>
        <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-white/82">
          {item.subtitle}
        </p>
        {stars && (
          <div className="mt-1.5 flex justify-end gap-0.5 text-[7px] text-white/88">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
        )}
      </div>

      <svg
        viewBox="0 0 20 48"
        className="h-[38px] w-[16px] shrink-0 text-white/92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M2 1c4.5 3.3 7 7.2 7 11.6 0 5.5-4.1 7-4.1 11.3 0 2.9 1.8 4.8 4.1 6.9 2.4 2.2 4.1 4.6 4.1 8.3 0 2.7-.8 5-2.2 7" />
      </svg>
    </div>
  );
};

const AboutIntro = () => {
  const marqueeItems = Array.from({ length: 4 }, () => aboutIntroContent.giantText);
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
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";

  const revealStyle = (delay) => ({
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden border-b border-slate-200 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24"
    >
      <Container className="max-w-[1340px]">
        <div className="grid gap-4 lg:grid-cols-[302px_702px_302px] lg:items-start">
          <div
            className={`max-w-[302px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
            style={revealStyle(40)}
          >
            <OrbitStamp />

            <p className="mt-10 max-w-[280px] text-[15px] leading-[1.68] tracking-[-0.02em] text-slate-500">
              {aboutIntroContent.summary}
            </p>
          </div>

          <div
            className={`pt-1 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-2 ${revealClass}`}
            style={revealStyle(130)}
          >
            <h2 className="max-w-[830px] font-['Funnel_Display'] text-[clamp(2.25rem,4.15vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.072em] text-slate-950">
              {aboutIntroContent.headline}
            </h2>
          </div>
        </div>

        <div className="mt-[58px] grid gap-4 lg:grid-cols-[302px_702px_302px] lg:items-start lg:justify-between">
          <article
            className={`flex min-h-[500px] flex-col rounded-[28px] bg-white px-7 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-[500px] ${revealClass}`}
            style={revealStyle(220)}
          >
            <div className="flex items-start leading-none text-slate-950">
              <span className="font-['Funnel_Display'] text-[96px] font-normal tracking-[-0.11em]">
                {aboutIntroContent.statCard.number.replace("+", "")}
              </span>
              <span className="mt-3 font-['Funnel_Display'] text-[62px] font-normal tracking-[-0.08em] text-slate-200">
                +
              </span>
            </div>

            <p className="mt-2 text-[14px] leading-6 text-slate-400">
              {aboutIntroContent.statCard.label}
            </p>

            <div className="my-6 border-t border-slate-200" />

            <p className="max-w-[208px] text-[15px] leading-[1.72] tracking-[-0.02em] text-slate-500">
              {aboutIntroContent.statCard.description}
            </p>

            <div className="mt-auto pt-16">
              <div className="flex items-center">
                {reviewAvatars.map((avatar, index) => (
                  <img
                    key={avatar.id}
                    src={avatar.src}
                    alt={avatar.alt}
                    className={`h-9 w-9 rounded-full border-2 border-white object-cover shadow-[0_10px_22px_rgba(15,23,42,0.08)] ${
                      index === 0 ? "" : "-ml-2.5"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 text-[14px] leading-6 tracking-[-0.02em] text-slate-800">
                {aboutIntroContent.statCard.reviewText}
              </p>
            </div>
          </article>

          <article
            className={`relative w-full max-w-[702px] min-h-[500px] overflow-hidden rounded-[24px] bg-black shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-[500px] ${revealClass}`}
            style={revealStyle(320)}
          >
            <div className="absolute inset-y-0 left-[2%] w-[56%]">
              <img
                src={aboutIntroContent.quoteCard.image}
                alt={aboutIntroContent.quoteCard.author}
                className="h-full w-full scale-[1.02] object-contain object-bottom-left"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_26%,rgba(0,0,0,0.34)_56%,rgba(0,0,0,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_36%,rgba(0,0,0,0.5)_74%,rgba(0,0,0,0.92)_100%)]" />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between px-9 py-8 lg:h-[500px]">
              <div className="ml-auto space-y-7 pt-1">
                {aboutIntroContent.quoteCard.awards.map((award, index) => (
                  <AwardBadge
                    key={award.title}
                    item={award}
                    isVisible={isVisible}
                    delay={430 + index * 110}
                    stars={index === 1}
                  />
                ))}
              </div>

              <div className="max-w-[515px]">
                <p className="font-['Funnel_Display'] text-[1.9rem] leading-[1.12] tracking-[-0.055em] text-white sm:text-[2.05rem]">
                  {aboutIntroContent.quoteCard.quote}
                </p>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.02em] text-white/90">
                  {aboutIntroContent.quoteCard.author}
                  <span className="ml-1.5 text-white/58">
                    {aboutIntroContent.quoteCard.role}
                  </span>
                </p>
              </div>
            </div>
          </article>

          <div
            className={`space-y-4 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
            style={revealStyle(420)}
          >
            <article className="min-h-[242px] rounded-[24px] bg-white px-7 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:h-[242px]">
              <p className="text-[13px] leading-6 text-slate-400">Follow us</p>
              <h3 className="mt-1 font-['Funnel_Display'] text-[1.08rem] font-normal leading-7 tracking-[-0.04em] text-slate-950">
                For check updates
              </h3>

              <div className="mt-[68px] flex max-w-[205px] flex-wrap gap-1.5">
                {aboutSocialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="rounded-full border border-slate-200 px-3.5 py-[6px] text-[11px] font-medium leading-none tracking-[0.02em] text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </article>

            <article className="min-h-[242px] rounded-[24px] bg-white px-7 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:h-[242px]">
              <p className="text-[13px] leading-6 text-slate-400">Impressions</p>

              <div className="mt-[54px] space-y-4">
                {impressionItems.map((item) => (
                  <div key={item.id} className="rounded-[10px] bg-slate-100 p-[3px]">
                    <div
                      className={[
                        "flex h-[29px] items-center justify-between overflow-hidden rounded-[8px] px-3 text-[12px] font-medium tracking-[-0.02em] transition-[width,transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        item.tone === "dark"
                          ? "bg-black text-white"
                          : "bg-white text-slate-900",
                      ].join(" ")}
                      style={{
                        width: isVisible ? `${item.value}%` : "18%",
                        transitionDelay: `${540 + item.id * 110}ms`,
                      }}
                    >
                      <span>{item.label}</span>
                      <span className={item.tone === "dark" ? "text-white" : "text-slate-400"}>
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="about-marquee-wrap relative left-1/2 mt-[88px] w-screen -translate-x-1/2 px-5 py-4">
          <div className="flex w-max animate-about-marquee whitespace-nowrap">
            {marqueeItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="pr-20 font-['Funnel_Display'] text-[clamp(5rem,9vw,9.6rem)] font-normal leading-[0.84] tracking-[-0.09em] text-slate-950"
                aria-hidden={index > 0}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[28px] border-t border-slate-200 pt-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Portfolio
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutIntro;
