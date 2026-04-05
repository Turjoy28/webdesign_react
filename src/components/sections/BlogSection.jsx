import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { blogData, blogSectionContent } from "../../data/blogData";

const DividerTrack = () => {
  return (
    <div className="flex items-center justify-between gap-2 overflow-hidden">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          className="h-2.5 w-px shrink-0 rounded-full bg-slate-300/70"
        />
      ))}
    </div>
  );
};

const BlogFeatureCard = ({ post, isVisible, delay }) => {
  const meta = (
    <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.08em]">
      <span>{post.category}</span>
      <span className="text-white/35">|</span>
      <span>{post.date}</span>
    </div>
  );

  if (post.variant === "light-bottom") {
    return (
      <article
        className={`group overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </div>

        <div className="bg-white px-5 py-4">
          <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400">
            <span>{post.category}</span>
            <span>|</span>
            <span>{post.date}</span>
          </div>

          <h3 className="mt-4 max-w-[230px] font-['Funnel_Display'] text-[1.55rem] font-normal leading-[1.08] tracking-[-0.05em] text-slate-950">
            {post.title}
          </h3>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-black px-5 py-4 text-white">
        {meta}

        <h3 className="mt-4 max-w-[230px] font-['Funnel_Display'] text-[1.55rem] font-normal leading-[1.08] tracking-[-0.05em] text-white">
          {post.title}
        </h3>
      </div>

      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
    </article>
  );
};

const BlogSection = () => {
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
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="bg-[#f5f5f5] pb-24 pt-6 sm:pb-28 sm:pt-10 lg:pb-32"
    >
      <Container className="max-w-[1110px]">
        <DividerTrack />

        <div
          className={`pt-16 text-center transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
            {blogSectionContent.label}
          </p>

          <h2 className="mt-7 font-['Funnel_Display'] text-[clamp(2.45rem,4.5vw,4rem)] font-normal leading-[1.06] tracking-[-0.07em] text-slate-950">
            {blogSectionContent.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {blogData.map((post, index) => (
            <BlogFeatureCard
              key={post.id}
              post={post}
              isVisible={isVisible}
              delay={120 + index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
