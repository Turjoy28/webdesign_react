import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../common/TestimonialCard";
import Container from "../layout/Container";
import { testimonialsData } from "../../data/testimonialsData";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding border-b border-slate-200">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="A review section is perfect for practicing repeated card layouts."
          description="This one already uses mapped data, reusable markup, and a responsive grid so you can replace the copy later without changing the structure."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
