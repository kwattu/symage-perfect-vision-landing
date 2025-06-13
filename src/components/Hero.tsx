
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main headline */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Zero Defects Are No Longer a Dream.
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                They're a Data Set.
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Empower your visual AI with flawless, physics-based synthetic data to catch every anomaly, every time.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 h-auto">
              Claim Free Proof-of-Concept Dataset
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
              Learn More
            </Button>
          </div>
          
          {/* Stats/Features Row */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Target className="h-8 w-8 mb-3 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">100% Accurate</h3>
              <p className="text-blue-100 text-center">Perfect labeling eliminates human error from your training data</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Zap className="h-8 w-8 mb-3 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">10x Faster</h3>
              <p className="text-blue-100 text-center">Generate millions of images in days, not months</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Eye className="h-8 w-8 mb-3 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Every Edge Case</h3>
              <p className="text-blue-100 text-center">Simulate any defect imaginable with physics-based precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
