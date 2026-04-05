import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import {
  teamData,
  teamSectionContent,
  teamTabs,
} from "../../data/teamData";

const iconMap = {
  facebook: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.3v7h3.2Z" />
    </svg>
  ),
  x: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.2 4H20l-6.2 7.1L21 20h-5.7l-4.4-5.5L6 20H3.2l6.6-7.5L3 4h5.8l4 5.1L17.2 4Zm-1 14.2h1.6L8.7 5.7H7.1l9.1 12.5Z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.8 8.6a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM5.2 19.5V10h3.1v9.5H5.2Zm5 0V10h2.9v1.3h.1c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5h-3.1V15c0-1.2 0-2.7-1.7-2.7S13.3 13.6 13.3 15v4.5h-3.1Z" />
    </svg>
  ),
};

const TeamSocialLink = ({ item }) => {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:text-slate-700"
      aria-label={item.label}
    >
      {iconMap[item.id]}
    </a>
  );
};

const TeamMemberCard = ({ member, isVisible, delay }) => {
  return (
    <article
      className={`rounded-[24px] bg-[#f7f7f7] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden rounded-[20px] bg-[#d7bb8f]">
        <img
          src={member.image}
          alt={member.imageAlt}
          className="h-[220px] w-full object-cover object-top sm:h-[250px]"
        />
      </div>

      <div className="px-1 pb-1 pt-6">
        <h3 className="font-['Funnel_Display'] text-[1.55rem] font-normal leading-[1.05] tracking-[-0.05em] text-slate-950">
          {member.name}
        </h3>
        <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.08em] text-slate-400">
          {member.role}
        </p>

        <div className="mt-6 flex gap-2.5">
          {member.socials.map((item) => (
            <TeamSocialLink key={`${member.id}-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </article>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);
  const switchTimeoutRef = useRef(null);
  const [activeTeam, setActiveTeam] = useState(teamTabs[0].key);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (switchTimeoutRef.current) {
        clearTimeout(switchTimeoutRef.current);
      }
    };
  }, []);

  const handleTeamChange = (teamKey) => {
    if (teamKey === activeTeam) {
      return;
    }

    if (switchTimeoutRef.current) {
      clearTimeout(switchTimeoutRef.current);
    }

    setIsContentVisible(false);

    switchTimeoutRef.current = setTimeout(() => {
      setActiveTeam(teamKey);
      setIsContentVisible(true);
    }, 180);
  };

  const activeGroup = teamData[activeTeam];
  const contentIsShown = isSectionVisible && isContentVisible;

  return (
    <section
      id="team"
      ref={sectionRef}
      className="bg-[#f5f5f5] py-[4.75rem] sm:py-[5.75rem] lg:py-28"
    >
      <Container className="max-w-[1110px]">
        <div
          className={`rounded-[32px] bg-white px-6 py-7 shadow-[0_28px_80px_rgba(15,23,42,0.06)] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-10 lg:px-20 lg:py-16 ${
            isSectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex h-full flex-col">
              <div
                className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isSectionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "70ms" }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700">
                  {teamSectionContent.label}
                </p>

                <h2 className="mt-6 max-w-[360px] font-['Funnel_Display'] text-[clamp(2.35rem,4.7vw,4rem)] font-normal leading-[1.04] tracking-[-0.07em] text-slate-950">
                  {teamSectionContent.title}
                </h2>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                  {teamTabs.map((tab) => {
                    const isActive = activeTeam === tab.key;

                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => handleTeamChange(tab.key)}
                        className={`relative pb-2 text-[12px] font-semibold uppercase tracking-[0.04em] transition ${
                          isActive
                            ? "text-slate-950 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-slate-950"
                            : "text-slate-300 hover:text-slate-500"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                className={`mt-6 max-w-[430px] transition-all duration-[450ms] ease-out ${
                  contentIsShown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-[1.12rem] leading-[1.75] tracking-[-0.03em] text-slate-500">
                  {activeGroup.description}
                </p>
              </div>

              <a
                href={teamSectionContent.ctaHref}
                className={`group mt-8 inline-flex items-center gap-4 self-start text-[13px] font-semibold uppercase tracking-[0.04em] text-slate-950 transition-all duration-[450ms] ease-out ${
                  contentIsShown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg leading-none text-white transition-transform duration-300 group-hover:scale-105">
                  +
                </span>
                <span>{teamSectionContent.ctaLabel}</span>
              </a>

              <div
                className={`mt-10 overflow-hidden rounded-[26px] shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-[550ms] ease-out ${
                  contentIsShown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <img
                  src={activeGroup.featureImage}
                  alt={activeGroup.featureAlt}
                  className="h-[220px] w-full object-cover sm:h-[255px]"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {activeGroup.members.map((member, index) => (
                <TeamMemberCard
                  key={`${activeTeam}-${member.id}`}
                  member={member}
                  isVisible={contentIsShown}
                  delay={150 + index * 80}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
