
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Target, Zap, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-symage-dark overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-symage-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-symage-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-symage-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-symage-lime rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-symage-blue rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-symage-pink rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-symage-lime rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="animate-fade-in mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="h-4 w-4 mr-2 text-symage-lime" />
              <span className="text-sm font-medium">Revolutionary AI Training Data</span>
            </div>
          </div>
          
          {/* Main headline with enhanced styling */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 font-sans">
              <span className="block relative">
                Every Defect Detected.
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-symage-lime rounded-full opacity-60 animate-ping"></div>
              </span>
              <span className="block text-transparent bg-gradient-to-r from-symage-blue via-symage-pink to-symage-lime bg-clip-text animate-pulse">
                Because Your AI Trained on Perfection.
              </span>
            </h1>
          </div>
          
          {/* Enhanced subtitle with better typography */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-2xl md:text-3xl mb-16 text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
              Empower your visual AI with <span className="text-symage-lime font-semibold">flawless</span>, 
              <span className="text-symage-blue font-semibold"> physics-based</span> synthetic data to catch 
              <span className="text-symage-pink font-semibold"> every anomaly</span>, every time.
            </p>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="animate-scale-in flex justify-center mb-20" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="lg" className="relative bg-gradient-to-r from-symage-blue to-symage-purple hover:from-symage-purple hover:to-symage-pink text-white text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Claim Free Proof-of-Concept Dataset</span>
              <ArrowRight className="ml-3 h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Enhanced Stats/Features Row with better visual hierarchy */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-symage-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-symage-blue to-symage-purple"></div>
              <Target className="h-10 w-10 mb-4 text-symage-blue group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 font-sans">100% Accurate</h3>
              <p className="text-gray-300 leading-relaxed">Perfect labeling eliminates human error from your training data</p>
            </div>
            
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-symage-lime/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-symage-lime to-symage-blue"></div>
              <Zap className="h-10 w-10 mb-4 text-symage-lime group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 font-sans">10x Faster</h3>
              <p className="text-gray-300 leading-relaxed">Generate millions of images in days, not months</p>
            </div>
            
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-symage-pink/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-symage-pink to-symage-purple"></div>
              <Eye className="h-10 w-10 mb-4 text-symage-pink group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 font-sans">Every Edge Case</h3>
              <p className="text-gray-300 leading-relaxed">Simulate any defect imaginable with physics-based precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
