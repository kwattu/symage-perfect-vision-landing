
import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-symage-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-symage-text-dark mb-6 font-sans">
              The Real Cost of a Single Missed Defect
            </h2>
            <p className="text-xl text-symage-medium-gray max-w-4xl mx-auto">
              Defects are more than a production headache; they are a direct assault on your bottom line and brand reputation.
            </p>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm animate-slide-in-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2 font-sans">30%</div>
              <p className="text-symage-medium-gray font-medium">Error rate in manual inspection</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2 font-sans">$1.3T</div>
              <p className="text-symage-medium-gray font-medium">Global annual losses to poor quality</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <TrendingDown className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-2 font-sans">30/100</div>
              <p className="text-symage-medium-gray font-medium">Potentially flawed products approved</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-symage-medium-gray mb-6 leading-relaxed">
                Even with stringent quality control, human-led manual inspection can have an error rate as high as 30%. This means for every 100 products approved, up to 30 could be flawed—leading to staggering waste, costly rework, and eroded customer trust.
              </p>
              <p className="text-lg text-symage-medium-gray leading-relaxed">
                Globally, manufacturers lose an estimated $1.3 trillion annually to poor quality. This isn't just a number; it's the market share you lose and the damage to the reputation you've worked so hard to build.
              </p>
            </div>
          </div>
          
          {/* The Problem Isn't Your Process Section */}
          <div className="mt-20 text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-symage-text-dark mb-8 font-sans">
              The Problem Isn't Your Process. 
              <span className="text-red-600"> It's Your Data.</span>
            </h3>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
              <p className="text-lg text-symage-medium-gray leading-relaxed">
                Your visual inspection AI is limited by the data it learns from. Real-world data is the bottleneck—it's expensive to acquire, slow to label, and riddled with inconsistencies and blind spots. Training your models on imperfect data creates a critical gap between their potential and their actual performance, leaving you vulnerable to missed defects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
