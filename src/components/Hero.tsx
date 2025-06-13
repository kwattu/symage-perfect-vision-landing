import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-symage-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-symage-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-symage-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main headline */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-sans">
              Zero Defects Are No Longer a Dream.
              <span className="block text-transparent bg-gradient-to-r from-symage-blue to-symage-pink bg-clip-text">
                They're a Data Set.
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-medium">
              Empower your visual AI with flawless, physics-based synthetic data to catch every anomaly, every time.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-scale-in flex justify-center mb-16" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-symage-blue hover:bg-symage-blue/90 text-white text-lg px-8 py-4 h-auto">
              Claim Free Proof-of-Concept Dataset
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Stats/Features Row */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Target className="h-8 w-8 mb-3 text-symage-blue" />
              <h3 className="text-xl font-semibold mb-2 font-sans">100% Accurate</h3>
              <p className="text-gray-300 text-center">Perfect labeling eliminates human error from your training data</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Zap className="h-8 w-8 mb-3 text-symage-lime" />
              <h3 className="text-xl font-semibold mb-2 font-sans">10x Faster</h3>
              <p className="text-gray-300 text-center">Generate millions of images in days, not months</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Eye className="h-8 w-8 mb-3 text-symage-pink" />
              <h3 className="text-xl font-semibold mb-2 font-sans">Every Edge Case</h3>
              <p className="text-gray-300 text-center">Simulate any defect imaginable with physics-based precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
