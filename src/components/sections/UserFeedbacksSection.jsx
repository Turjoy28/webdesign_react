import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import {
  userFeedbackColumns,
  userFeedbacksContent,
} from "../../data/userFeedbacksData";

const UserFeedbackCard = ({ item }) => {
  if (item.type === "profile") {
    return (
      <article className="rounded-[22px] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
        <h3 className="font-['Funnel_Display'] text-[1.35rem] font-normal tracking-[-0.045em] text-slate-950">
          {item.name}
        </h3>
        <p className="mt-1 text-[14px] leading-6 text-slate-400">{item.role}</p>
      </article>
    );
  }

  return (
    <article className="flex min-h-[278px] flex-col rounded-[22px] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex gap-1.5 text-[14px] text-orange-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>

      <p className="mt-6 max-w-[290px] text-[1.05rem] leading-[1.7] tracking-[-0.03em] text-slate-900">
        {item.quote}
      </p>

      <p className="mt-auto pt-8 text-[12px] uppercase tracking-[0.1em] text-slate-300">
        {item.company}
      </p>
    </article>
  );
};

const UserFeedbacksSection = () => {
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

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";
  const transitionStyle = (delay) => ({
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="border-b border-slate-200 bg-[#f5f5f5] py-[4.75rem] sm:py-[5.75rem] lg:py-28"
    >
      <Container className="max-w-[1110px]">
        <div
          className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
          style={transitionStyle(30)}
        >
          <article className="relative overflow-hidden rounded-[28px] bg-black shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img
              src={userFeedbacksContent.bannerImage}
              alt={userFeedbacksContent.bannerAlt}
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[398px]"
            />

            <a
              href={userFeedbacksContent.videoHref}
              target="_blank"
              rel="noreferrer"
              className="group absolute bottom-6 left-6 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-slate-950 transition hover:scale-[1.02] sm:bottom-8 sm:left-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105">
                <span className="ml-0.5 text-[12px]">&#9654;</span>
              </span>
              <span>Play reel</span>
            </a>
          </article>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            {userFeedbacksContent.label}
          </p>
        </div>

        <div className="mt-7 grid gap-x-10 gap-y-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div />

          <div
            className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
            style={transitionStyle(140)}
          >
            <h2 className="max-w-[645px] font-['Funnel_Display'] text-[clamp(2.45rem,4.7vw,4.15rem)] font-normal leading-[1.08] tracking-[-0.07em] text-slate-950">
              {userFeedbacksContent.headingStart}{" "}
              <span className="mx-1.5 inline-flex translate-y-[-0.06em] items-center">
                {userFeedbacksContent.inlineAvatars.map((avatar, index) => (
                  <img
                    key={avatar.id}
                    src={avatar.src}
                    alt={avatar.alt}
                    className={`h-11 w-11 rounded-full border-2 border-[#f5f5f5] object-cover shadow-[0_8px_24px_rgba(15,23,42,0.1)] ${
                      index === 0 ? "" : "-ml-2.5"
                    }`}
                  />
                ))}
              </span>{" "}
              {userFeedbacksContent.headingEnd}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:items-start">
          {userFeedbackColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className={`space-y-4 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
              style={transitionStyle(240 + columnIndex * 120)}
            >
              {column.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={transitionStyle(320 + columnIndex * 120 + itemIndex * 90)}
                >
                  <UserFeedbackCard item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserFeedbacksSection;
