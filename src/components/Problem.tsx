
import { AlertTriangle, TrendingDown, DollarSign, Zap } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-symage-light-gray to-white relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-symage-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-symage-text-dark mb-6 font-sans leading-tight">
              The Real Cost of a 
              <span className="block text-symage-purple">
                Single Missed Defect
              </span>
            </h2>
            <p className="text-xl text-symage-medium-gray max-w-3xl mx-auto leading-relaxed">
              Defects are more than a production headache; they are a direct assault on your bottom line and brand reputation.
            </p>
          </div>
          
          {/* Cleaner stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-symage-purple/10 rounded-xl mb-6">
                <AlertTriangle className="h-8 w-8 text-symage-purple" />
              </div>
              <div className="text-4xl font-bold text-symage-purple mb-3 font-sans">30%</div>
              <p className="text-symage-medium-gray font-medium">Error rate in manual inspection</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-symage-blue/10 rounded-xl mb-6">
                <DollarSign className="h-8 w-8 text-symage-blue" />
              </div>
              <div className="text-4xl font-bold text-symage-blue mb-3 font-sans">$1.3T</div>
              <p className="text-symage-medium-gray font-medium">Global annual losses to poor quality</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-symage-purple/10 rounded-xl mb-6">
                <TrendingDown className="h-8 w-8 text-symage-purple" />
              </div>
              <div className="text-4xl font-bold text-symage-purple mb-3 font-sans">30/100</div>
              <p className="text-symage-medium-gray font-medium">Potentially flawed products approved</p>
            </div>
          </div>
          
          {/* Simplified main content */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-symage-purple/10 rounded-xl mb-6">
                <Zap className="h-6 w-6 text-symage-purple" />
              </div>
              <p className="text-lg text-symage-medium-gray mb-6 leading-relaxed">
                Even with stringent quality control, human-led manual inspection can have an error rate as high as 
                <span className="font-semibold text-symage-purple"> 30%</span>. This means for every 100 products approved, up to 
                <span className="font-semibold text-symage-purple"> 30 could be flawed</span>—leading to staggering waste, costly rework, and eroded customer trust.
              </p>
              <p className="text-lg text-symage-medium-gray leading-relaxed">
                Globally, manufacturers lose an estimated 
                <span className="font-semibold text-symage-blue"> $1.3 trillion annually</span> to poor quality. This isn't just a number; it's the market share you lose and the damage to the reputation you've worked so hard to build.
              </p>
            </div>
          </div>
          
          {/* Clean problem statement */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-symage-text-dark mb-8 font-sans leading-tight">
              The Problem Isn't Your Process. 
              <span className="block text-symage-purple">
                It's Your Data.
              </span>
            </h3>
            <div className="bg-white border border-gray-100 rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
              <div className="w-12 h-1 bg-symage-purple mx-auto mb-6"></div>
              <p className="text-lg text-symage-medium-gray leading-relaxed">
                Your visual inspection AI is limited by the data it learns from. Real-world data is the 
                <span className="font-semibold text-symage-purple"> bottleneck</span>—it's expensive to acquire, slow to label, and riddled with inconsistencies and blind spots. Training your models on 
                <span className="font-semibold text-symage-blue"> imperfect data</span> creates a critical gap between their potential and their actual performance, leaving you vulnerable to missed defects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
