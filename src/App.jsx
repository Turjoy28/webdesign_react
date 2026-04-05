import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AboutIntro from "./components/sections/AboutIntro";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServicesSection from "./components/sections/ServicesSection";
import ResultsShowcaseSection from "./components/sections/ResultsShowcaseSection";
import UserFeedbacksSection from "./components/sections/UserFeedbacksSection";
import ContactSection from "./components/sections/ContactSection";
import AwardsSection from "./components/sections/AwardsSection";
import TeamSection from "./components/sections/TeamSection";
import FAQSection from "./components/sections/FAQSection";
import BlogSection from "./components/sections/BlogSection";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-slate-1000">
      <Navbar />
      <main className="overflow-x-hidden pt-[84px] sm:pt-[90px]">
        <Hero />
        <AboutIntro />
        <PortfolioSection />
        <ServicesSection />
        <ResultsShowcaseSection />
        <UserFeedbacksSection />
        <ContactSection />
        <AwardsSection />
        <TeamSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
