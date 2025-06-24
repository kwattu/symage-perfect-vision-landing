
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SolutionIntro from "@/components/SolutionIntro";
import Solution from "@/components/Solution";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-symage-dark via-symage-dark to-blue-900">
      <Header />
      <Hero />
      <Problem />
      <SolutionIntro />
      <Solution />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
