
import { AlertTriangle, TrendingDown, DollarSign, Zap } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-symage-light-gray to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-symage-purple/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-symage-pink/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-symage-purple/10 rounded-full mb-8">
              <AlertTriangle className="h-10 w-10 text-symage-purple" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-symage-text-dark mb-8 font-sans leading-tight">
              The Real Cost of a 
              <span className="block text-transparent bg-gradient-to-r from-symage-purple to-symage-pink bg-clip-text">
                Single Missed Defect
              </span>
            </h2>
            <p className="text-2xl text-symage-medium-gray max-w-4xl mx-auto leading-relaxed">
              Defects are more than a production headache; they are a 
              <span className="font-semibold text-symage-purple"> direct assault</span> on your bottom line and brand reputation.
            </p>
          </div>
          
          {/* Enhanced Stats Row with better visual impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group relative text-center p-10 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 animate-slide-in-left overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-symage-purple to-symage-pink"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-symage-purple rounded-full animate-pulse"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-symage-purple/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="h-10 w-10 text-symage-purple" />
              </div>
              <div className="text-5xl font-bold text-symage-purple mb-4 font-sans">30%</div>
              <p className="text-symage-medium-gray font-medium text-lg">Error rate in manual inspection</p>
            </div>
            
            <div className="group relative text-center p-10 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 animate-scale-in overflow-hidden" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-symage-blue to-symage-purple"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-symage-blue rounded-full animate-pulse"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-symage-blue/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-10 w-10 text-symage-blue" />
              </div>
              <div className="text-5xl font-bold text-symage-blue mb-4 font-sans">$1.3T</div>
              <p className="text-symage-medium-gray font-medium text-lg">Global annual losses to poor quality</p>
            </div>
            
            <div className="group relative text-center p-10 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 animate-slide-in-left overflow-hidden" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-symage-pink to-symage-lime"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-symage-pink rounded-full animate-pulse"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-symage-pink/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="h-10 w-10 text-symage-pink" />
              </div>
              <div className="text-5xl font-bold text-symage-pink mb-4 font-sans">30/100</div>
              <p className="text-symage-medium-gray font-medium text-lg">Potentially flawed products approved</p>
            </div>
          </div>
          
          {/* Enhanced Main Content with visual elements */}
          <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-200 animate-fade-in overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-symage-purple/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-symage-blue/10 to-transparent rounded-tr-3xl"></div>
            <div className="relative max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-symage-purple/10 rounded-2xl mb-8">
                <Zap className="h-8 w-8 text-symage-purple" />
              </div>
              <p className="text-xl text-symage-medium-gray mb-8 leading-relaxed">
                Even with stringent quality control, human-led manual inspection can have an error rate as high as 
                <span className="font-bold text-symage-purple"> 30%</span>. This means for every 100 products approved, up to 
                <span className="font-bold text-symage-purple"> 30 could be flawed</span>—leading to staggering waste, costly rework, and eroded customer trust.
              </p>
              <p className="text-xl text-symage-medium-gray leading-relaxed">
                Globally, manufacturers lose an estimated 
                <span className="font-bold text-symage-blue"> $1.3 trillion annually</span> to poor quality. This isn't just a number; it's the market share you lose and the damage to the reputation you've worked so hard to build.
              </p>
            </div>
          </div>
          
          {/* Enhanced Problem Isn't Your Process Section */}
          <div className="mt-24 text-center animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold text-symage-text-dark mb-12 font-sans leading-tight">
              The Problem Isn't Your Process. 
              <span className="block text-transparent bg-gradient-to-r from-symage-purple via-symage-pink to-symage-blue bg-clip-text">
                It's Your Data.
              </span>
            </h3>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-12 md:p-16 shadow-xl max-w-5xl mx-auto overflow-hidden">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-symage-pink/20 to-symage-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-symage-blue/20 to-symage-lime/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-16 h-1 bg-gradient-to-r from-symage-purple to-symage-pink mx-auto mb-8"></div>
                <p className="text-xl text-symage-medium-gray leading-relaxed">
                  Your visual inspection AI is limited by the data it learns from. Real-world data is the 
                  <span className="font-semibold text-symage-purple"> bottleneck</span>—it's expensive to acquire, slow to label, and riddled with inconsistencies and blind spots. Training your models on 
                  <span className="font-semibold text-symage-blue"> imperfect data</span> creates a critical gap between their potential and their actual performance, leaving you vulnerable to missed defects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
