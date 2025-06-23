
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SolutionIntro from "@/components/SolutionIntro";
import Solution from "@/components/Solution";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <SolutionIntro />
      <Solution />
      <Industries />
      <CTA />
    </div>
  );
};

export default Index;
