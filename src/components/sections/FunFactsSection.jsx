import SectionHeading from "../common/SectionHeading";
import StatCard from "../common/StatCard";
import Container from "../layout/Container";
import { funFacts } from "../../data/statsData";

const FunFactsSection = () => {
  return (
    <section className="section-padding border-b border-slate-200">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          label="Fun facts"
          title="Another card grid you can polish later with counters or motion."
          description="For now, the goal is simply to keep your code organized and your spacing system consistent."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {funFacts.map((fact) => (
            <StatCard
              key={fact.id}
              number={fact.number}
              label={fact.label}
              description={fact.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FunFactsSection;
