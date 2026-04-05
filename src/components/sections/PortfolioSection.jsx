import PortfolioCard from "../common/PortfolioCard";
import Container from "../layout/Container";
import {
  portfolioData,
  portfolioSectionContent,
} from "../../data/portfolioData";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-b border-slate-200 pb-16 pt-5 sm:pb-20">
      <Container className="max-w-[1320px]">
        <div className="border-t border-slate-200 pt-4">
          <div className="grid gap-y-8 lg:grid-cols-[655px_minmax(0,1fr)] lg:items-start">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
              {portfolioSectionContent.label}
            </p>

            <h2 className="max-w-[455px] text-[clamp(2.25rem,4.1vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.06em] text-slate-950">
              {portfolioSectionContent.title}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-x-[10px] gap-y-7 md:grid-cols-2">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
