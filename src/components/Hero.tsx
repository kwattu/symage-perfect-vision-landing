
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
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left column - Content */}
          <div className="text-white">
            {/* Four-line headline with pulsing text */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 font-sans">
                <span className="block">
                  No Defect
                </span>
                <span className="block">
                  Left Behind.
                </span>
                <span className="block animate-pulse text-transparent bg-gradient-to-r from-symage-blue to-symage-purple bg-clip-text">
                  Because Your Model
                </span>
                <span className="block animate-pulse text-transparent bg-gradient-to-r from-symage-blue to-symage-purple bg-clip-text">
                  Trained on Every One.
                </span>
              </h1>
            </div>
            
            {/* Enhanced subtitle without border */}
            <div className="animate-slide-in-left mb-12" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                Empower your visual AI with flawless, physics-based synthetic data to catch every anomaly, every time.
              </p>
            </div>
            
            {/* Clean CTA Button */}
            <div className="animate-scale-in mb-16" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Button size="lg" className="bg-symage-blue hover:bg-symage-blue/90 text-white text-lg px-10 py-5 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Claim Free Proof-of-Concept Dataset</span>
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
            
            {/* Enhanced features with bigger text and professional icons */}
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-symage-blue/20 rounded-xl mb-4 group-hover:bg-symage-blue/30 transition-colors duration-300">
                  <Target className="h-6 w-6 text-symage-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">100% Accurate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Perfect labeling eliminates human error</p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-symage-purple/20 rounded-xl mb-4 group-hover:bg-symage-purple/30 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-symage-purple" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">10x Faster</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Generate millions of images in days</p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-symage-blue/20 rounded-xl mb-4 group-hover:bg-symage-blue/30 transition-colors duration-300">
                  <Eye className="h-6 w-6 text-symage-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Every Edge Case</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Simulate any defect with precision</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero Image - moved up by 2 inches */}
          <div className="relative animate-scale-in -mt-16" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="relative group">
              {/* Main image container with elegant border and shadow */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src="/lovable-uploads/11f745e5-558a-4b39-883f-b1d279f56e3a.png" 
                  alt="AI-powered defect detection in manufacturing showing automated inspection system identifying surface scratches on metal components"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-symage-dark/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-symage-blue rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-symage-purple/30 rounded-full blur-md opacity-40"></div>
              
              {/* Elegant caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-white text-sm font-medium">
                    Real-time defect detection powered by synthetic training data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
