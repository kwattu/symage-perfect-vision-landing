
import { AlertTriangle, Clock, Database, Eye, TrendingDown, X } from "lucide-react";

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
              Does This Sound 
              <span className="block text-symage-purple">
                Familiar?
              </span>
            </h2>
            <p className="text-xl text-symage-medium-gray max-w-3xl mx-auto leading-relaxed">
              You're responsible for quality, but you're constantly held back by data problems.
            </p>
          </div>
          
          {/* Problem points in clean grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-symage-text-dark mb-3">RARE DEFECTS, BIG PROBLEMS</h4>
                  <p className="text-symage-medium-gray leading-relaxed">You struggle to collect enough images of those rare but critical defects, leaving your AI models partially blind.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <X className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-symage-text-dark mb-3">FALSE POSITIVES HALT PRODUCTION</h4>
                  <p className="text-symage-medium-gray leading-relaxed">Your current system cries wolf, stopping the line for acceptable variations in lighting, texture, or reflection, costing time and money.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-symage-text-dark mb-3">THE "COLD START" PROBLEM</h4>
                  <p className="text-symage-medium-gray leading-relaxed">Launching a new product or line means starting the painful, slow, and expensive data collection process all over again.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-symage-text-dark mb-3">EXPENSIVE, SLOW LABELING</h4>
                  <p className="text-symage-medium-gray leading-relaxed">Manual data collection and annotation is a drain on resources, budget, and is prone to human error and inconsistency.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional problem point */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in mb-16">
            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-symage-text-dark mb-3">UNSEEN FLAWS SLIP THROUGH</h4>
                <p className="text-symage-medium-gray leading-relaxed">You can't train a model to find a defect it has never seen.</p>
              </div>
            </div>
          </div>
          
          {/* Clean conclusion statement */}
          <div className="text-center animate-fade-in">
            <div className="bg-white border border-gray-100 rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
              <div className="w-12 h-1 bg-symage-purple mx-auto mb-6"></div>
              <p className="text-lg text-symage-medium-gray leading-relaxed font-medium">
                Traditional data collection isn't just inefficient; it's a 
                <span className="font-bold text-symage-purple"> barrier to achieving true quality control</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
