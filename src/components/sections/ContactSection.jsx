import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";

const budgetOptions = [
  "$1000 - $5000",
  "$5000 - $10000",
  "$10000 - $25000",
  "$25000+",
];

const serviceOptions = [
  "Consultancy",
  "Website design",
  "SEO strategy",
  "Growth marketing",
];

const contactDetails = [
  {
    id: "talk",
    title: "Talk to us",
    lines: ["Work and general inquiries", "+123 456 789 00"],
  },
  {
    id: "address",
    title: "Post address",
    lines: ["541 Melville Ave, Palo Alto, CA", "94301, United States"],
  },
];

const fieldClassName =
  "h-[54px] w-full rounded-[14px] border border-transparent bg-[#f4f4f4] px-4 text-[13px] font-medium text-slate-900 outline-none transition placeholder:text-[12px] placeholder:font-medium placeholder:uppercase placeholder:tracking-[0.08em] placeholder:text-slate-300 focus:border-slate-200 focus:bg-white";

const panelStyle = {
  backgroundColor: "#050505",
  backgroundImage:
    "radial-gradient(circle at 18% 16%, rgba(255,255,255,0.08), transparent 32%), radial-gradient(circle at 88% 12%, rgba(255,255,255,0.04), transparent 24%), linear-gradient(120deg, rgba(255,255,255,0.05), transparent 28%, transparent 72%, rgba(255,255,255,0.03))",
};

const grainStyle = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.13) 0.75px, transparent 0.95px)",
  backgroundSize: "6px 6px",
  backgroundPosition: "0 0, 3px 3px",
};

const ContactSection = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#f5f5f5] py-[4.75rem] sm:py-[5.75rem] lg:py-28"
    >
      <Container className="max-w-[1160px]">
        <article
          className="relative overflow-hidden rounded-[32px] px-6 py-10 shadow-[0_26px_80px_rgba(15,23,42,0.12)] sm:px-10 sm:py-12 lg:px-16 lg:py-16"
          style={panelStyle}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
            style={grainStyle}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[24%] w-px bg-white/6"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.04fr_0.9fr] lg:items-start lg:gap-12">
            <div
              className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${revealClass}`}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Get in touch
              </p>

              <h2 className="mt-5 max-w-[540px] font-['Funnel_Display'] text-[clamp(2.5rem,4.9vw,4.3rem)] font-normal leading-[1.04] tracking-[-0.07em] text-white">
                Tell us about your project, whether it&apos;s a website,
                SEO, or marketing.
              </h2>

              <div className="mt-12 grid gap-8 text-white/90 sm:grid-cols-2 lg:mt-16">
                {contactDetails.map((item, index) => (
                  <div
                    key={item.id}
                    className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${180 + index * 110}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/12 bg-white/8">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
                      </span>

                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
                          {item.title}
                        </p>

                        <div className="mt-4 space-y-1.5 text-[1rem] leading-7 text-slate-300">
                          {item.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-all duration-[1050ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8 lg:p-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "130ms" }}
            >
              <h3 className="font-['Funnel_Display'] text-[2rem] font-normal tracking-[-0.05em] text-slate-950">
                Have a project in mind?
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={fieldClassName}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Business email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Business email"
                    className={fieldClassName}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-budget"
                    className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-900"
                  >
                    Budget
                  </label>

                  <div className="relative">
                    <select
                      id="contact-budget"
                      name="budget"
                      defaultValue={budgetOptions[0]}
                      className={`${fieldClassName} appearance-none pr-11`}
                    >
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.25 4.5 6 8.25 9.75 4.5" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-900"
                  >
                    Service
                  </label>

                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue={serviceOptions[0]}
                      className={`${fieldClassName} appearance-none pr-11`}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.25 4.5 6 8.25 9.75 4.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className={`${fieldClassName} h-[120px] resize-none py-4`}
                />
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.04em] text-slate-950"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg leading-none text-white transition-transform duration-300 group-hover:scale-105">
                  +
                </span>
                <span>Let&apos;s talk</span>
              </button>
            </form>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default ContactSection;
