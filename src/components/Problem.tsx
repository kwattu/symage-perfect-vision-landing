
import { AlertTriangle, Clock, Database, Eye, TrendingDown, X } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-symage-purple/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-symage-blue/2 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Refined section header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-symage-purple to-symage-blue rounded-full mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 font-sans leading-tight tracking-tight">
              Does This Sound 
              <span className="block font-semibold bg-gradient-to-r from-symage-purple to-symage-blue bg-clip-text text-transparent">
                Familiar?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              You're responsible for quality, but you're constantly held back by data problems.
            </p>
          </div>
          
          {/* Elegant problem cards in asymmetric layout */}
          <div className="space-y-8 mb-20">
            {/* First row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-red-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">RARE DEFECTS, BIG PROBLEMS</h4>
                    <p className="text-slate-600 leading-relaxed font-light">You struggle to collect enough images of those rare but critical defects, leaving your AI models partially blind.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <X className="h-8 w-8 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">FALSE POSITIVES HALT PRODUCTION</h4>
                    <p className="text-slate-600 leading-relaxed font-light">Your current system cries wolf, stopping the line for acceptable variations in lighting, texture, or reflection, costing time and money.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingDown className="h-8 w-8 text-blue-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">THE "COLD START" PROBLEM</h4>
                    <p className="text-slate-600 leading-relaxed font-light">Launching a new product or line means starting the painful, slow, and expensive data collection process all over again.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-purple-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">EXPENSIVE, SLOW LABELING</h4>
                    <p className="text-slate-600 leading-relaxed font-light">Manual data collection and annotation is a drain on resources, budget, and is prone to human error and inconsistency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third row - single centered card */}
            <div className="flex justify-center">
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-fade-in max-w-2xl w-full">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="h-8 w-8 text-red-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">UNSEEN FLAWS SLIP THROUGH</h4>
                    <p className="text-slate-600 leading-relaxed font-light">You can't train a model to find a defect it has never seen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Elegant conclusion statement */}
          <div className="text-center animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-symage-purple/5 via-symage-blue/5 to-symage-purple/5 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/60 backdrop-blur-sm border border-white/30 rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="w-20 h-1 bg-gradient-to-r from-symage-purple to-symage-blue mx-auto mb-8 rounded-full"></div>
                  <p className="text-xl text-slate-700 leading-relaxed font-light">
                    Traditional data collection isn't just inefficient; it's a 
                    <span className="font-semibold bg-gradient-to-r from-symage-purple to-symage-blue bg-clip-text text-transparent"> barrier to achieving true quality control</span>.
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

export default Problem;
