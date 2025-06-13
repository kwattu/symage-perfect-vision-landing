
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Target, Zap, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-symage-dark overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-symage-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-symage-purple/5 rounded-full blur-3xl"></div>
      
      {/* Badge moved to upper left corner */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
          <Sparkles className="h-4 w-4 mr-2 text-symage-blue" />
          <span className="text-sm font-medium text-white">Revolutionary AI Training Data</span>
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Four-line headline with pulsing text */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-16 font-sans">
              <span className="block">
                Every Defect
              </span>
              <span className="block">
                Detected.
              </span>
              <span className="block animate-pulse text-transparent bg-gradient-to-r from-symage-blue to-symage-purple bg-clip-text">
                Because Your AI
              </span>
              <span className="block animate-pulse text-transparent bg-gradient-to-r from-symage-blue to-symage-purple bg-clip-text">
                Trained on Perfection.
              </span>
            </h1>
          </div>
          
          {/* Enhanced subtitle with more prominence */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
              <p className="text-2xl md:text-3xl font-semibold text-white max-w-4xl mx-auto leading-relaxed">
                Empower your visual AI with flawless, physics-based synthetic data to catch every anomaly, every time.
              </p>
            </div>
          </div>
          
          {/* Clean CTA Button */}
          <div className="animate-scale-in flex justify-center mb-20" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-symage-blue hover:bg-symage-blue/90 text-white text-xl px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Claim Free Proof-of-Concept Dataset</span>
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          {/* Simplified features */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Target className="h-8 w-8 mb-4 text-symage-blue" />
              <h3 className="text-lg font-semibold mb-2">100% Accurate</h3>
              <p className="text-gray-400 text-sm">Perfect labeling eliminates human error</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="h-8 w-8 mb-4 text-symage-purple" />
              <h3 className="text-lg font-semibold mb-2">10x Faster</h3>
              <p className="text-gray-400 text-sm">Generate millions of images in days</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Eye className="h-8 w-8 mb-4 text-symage-blue" />
              <h3 className="text-lg font-semibold mb-2">Every Edge Case</h3>
              <p className="text-gray-400 text-sm">Simulate any defect with precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
