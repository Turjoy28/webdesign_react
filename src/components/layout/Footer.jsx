import { useEffect, useRef, useState } from "react";
import { footerContent } from "../../data/footerData";

const socialIconMap = {
  facebook: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.3v7h3.2Z" />
    </svg>
  ),
  x: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.2 4H20l-6.2 7.1L21 20h-5.7l-4.4-5.5L6 20H3.2l6.6-7.5L3 4h5.8l4 5.1L17.2 4Zm-1 14.2h1.6L8.7 5.7H7.1l9.1 12.5Z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.8 8.6a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM5.2 19.5V10h3.1v9.5H5.2Zm5 0V10h2.9v1.3h.1c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5h-3.1V15c0-1.2 0-2.7-1.7-2.7S13.3 13.6 13.3 15v4.5h-3.1Z" />
    </svg>
  ),
  behance: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 10.4c1.4 0 2.3-.7 2.3-2 0-1.8-1.4-2.5-3.7-2.5H3v10.7h4.5c2.6 0 4.2-1.2 4.2-3.3 0-1.7-1.1-2.8-3.2-2.9Zm-3-2.7h1.7c1 0 1.6.4 1.6 1.3 0 .9-.6 1.3-1.6 1.3H5.5V7.7Zm1.9 6.2H5.5v-2h1.9c1.1 0 1.8.3 1.8 1 0 .8-.7 1-1.8 1Zm10.4-6.2c-2.6 0-4.3 1.8-4.3 4.5 0 2.8 1.6 4.5 4.4 4.5 2.2 0 3.7-1 4.2-2.8h-2.2c-.2.6-.8 1.1-1.8 1.1-1.3 0-2.1-.8-2.1-2.2H22v-.7c0-2.7-1.6-4.4-4.2-4.4Zm0 1.7c1.1 0 1.8.7 1.9 2h-3.9c.2-1.2.9-2 2-2Zm-2.2-3.7h4.4V7h-4.4V5.7Z" />
    </svg>
  ),
};

const FooterBadge = () => {
  return (
    <div className="relative flex h-[126px] w-[126px] items-center justify-center rounded-full border border-white/10 bg-black/45 shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:h-[138px] sm:w-[138px]">
      <svg
        viewBox="0 0 140 140"
        className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite] text-white/80"
        aria-hidden="true"
      >
        <defs>
          <path
            id="footer-badge-path"
            d="M70,70 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="10"
          fontWeight="600"
          letterSpacing="4.4"
          textTransform="uppercase"
        >
          <textPath href="#footer-badge-path" startOffset="0%">
            {footerContent.badgeText}
          </textPath>
        </text>
      </svg>

      <span className="relative text-[2.25rem] leading-none text-white/85">
        &rarr;
      </span>
    </div>
  );
};

const FooterWatermark = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute bottom-[-132px] right-[-18px] hidden h-[360px] w-[360px] text-white/[0.03] lg:block"
      aria-hidden="true"
    >
      <g fill="currentColor">
        {Array.from({ length: 8 }).map((_, index) => (
          <rect
            key={index}
            x="184"
            y="36"
            width="32"
            height="168"
            rx="16"
            transform={`rotate(${index * 45} 200 200)`}
          />
        ))}
      </g>
    </svg>
  );
};

const FooterSocialLink = ({ item }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.02] text-white/88 transition duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.06]"
    >
      {socialIconMap[item.id]}
    </a>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = footerRef.current;

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
      { threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#f5f5f5] px-4 pb-4 pt-4 sm:px-5 lg:px-4">
      <section
        ref={footerRef}
        className="mx-auto max-w-[2000px] overflow-hidden rounded-[34px] bg-[#070707] text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
      >
        <div className="relative isolate overflow-hidden px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-12 lg:pt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.015),transparent_28%,transparent_72%,rgba(255,255,255,0.03))]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035),transparent_68%)] blur-3xl"
          />

          <div className="relative">
            <div className="flex min-h-[360px] items-center justify-center px-2 text-center sm:min-h-[420px] lg:min-h-[560px]">
              <div
                className={`relative transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="leading-[0.82] tracking-[-0.1em]">
                  <p className="bg-[linear-gradient(180deg,#bebebe_0%,#8e8e8e_45%,#1b1b1b_100%)] bg-clip-text font-['Funnel_Display'] text-[clamp(5rem,17vw,15rem)] font-normal text-transparent">
                    {footerContent.headline[0]}
                  </p>
                  <p className="-mt-[0.06em] bg-[linear-gradient(180deg,#8b8b8b_0%,#4b4b4b_48%,#0a0a0a_100%)] bg-clip-text font-['Funnel_Display'] text-[clamp(5rem,17vw,15rem)] font-normal text-transparent">
                    {footerContent.headline[1]}
                  </p>
                </div>

                <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2">
                  <FooterBadge />
                </div>
              </div>
            </div>

            <div className="relative mx-auto mt-2 max-w-[1180px] pb-2">
              <FooterWatermark />

              <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.1fr_0.58fr_0.92fr] lg:items-start">
                <div
                  className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "180ms" }}
                >
                  <div className="relative max-w-[520px] overflow-hidden rounded-[24px] bg-[#111111] shadow-[0_22px_60px_rgba(0,0,0,0.3)]">
                    <img
                      src={footerContent.image}
                      alt={footerContent.imageAlt}
                      className="h-[300px] w-full object-cover sm:h-[340px] lg:h-[400px]"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = footerContent.imageFallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.18)_100%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={footerContent.logoMark}
                        alt=""
                        className="h-[160px] w-[160px] brightness-0 invert sm:h-[185px] sm:w-[185px]"
                      />
                    </div>
                  </div>
                </div>

                <nav
                  className={`relative z-10 flex flex-col gap-5 pt-1 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "260ms" }}
                  aria-label="Footer"
                >
                  {footerContent.links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-['Funnel_Display'] text-[clamp(2rem,2.5vw,3.2rem)] leading-[1.02] tracking-[-0.06em] text-white transition hover:text-white/70"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div
                  className={`relative z-10 max-w-[480px] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "340ms" }}
                >
                  <p className="text-[1.05rem] leading-[1.72] tracking-[-0.02em] text-white/48">
                    {footerContent.aboutCopy}
                  </p>

                  <div className="mt-12 space-y-2">
                    {footerContent.contactItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block font-semibold leading-9 tracking-[-0.03em] text-white transition hover:text-white/70 sm:text-[1.08rem]"
                      >
                        {item.value}
                      </a>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">
                    {footerContent.socials.map((item) => (
                      <FooterSocialLink key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`mt-12 border-t border-white/6 pt-5 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "420ms" }}
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/28">
                  <a
                    href={footerContent.copyrightHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white/55"
                  >
                    {footerContent.copyright}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
