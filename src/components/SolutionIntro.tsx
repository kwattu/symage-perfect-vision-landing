
import { Rocket, Shield, DollarSign, Eye, RotateCcw } from "lucide-react";

const SolutionIntro = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "LAUNCH FASTER",
      description: "Generate a complete dataset for a new product before it even hits the production line. Train your models in parallel with product development."
    },
    {
      icon: Shield,
      title: "CRUSH FALSE POSITIVES",
      description: "Train your AI on every conceivable variation of lighting, angle, material texture, and shadow, teaching it what's a real defect vs. what's just noise."
    },
    {
      icon: DollarSign,
      title: "SLASH YOUR BUDGET",
      description: "Eliminate the massive operational costs and man-hours required for manual data collection, photography, and annotation."
    },
    {
      icon: Eye,
      title: "FIND THE UNFINDABLE",
      description: "Create thousands of examples of rare, subtle, or complex defects to train models that achieve near-perfect accuracy and recall."
    },
    {
      icon: RotateCcw,
      title: "ADAPT INSTANTLY",
      description: "When a new defect appears, simply model and generate new data in hours, not weeks. Keep your AI constantly improving without downtime."
    }
  ];

  return (
    <section className="py-20 bg-symage-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-symage-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-symage-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">
              The Solution: Data You Control, Not Just Collect.
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Synthetic data is the breakthrough your quality program needs. We create a digital twin of your product and its manufacturing environment. From there, we can generate a virtually infinite library of computer-generated, 100% accurate training data.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                It's not just "fake" data. It's a photorealistic simulation of your reality, giving you complete control to create the exact scenarios your AI needs to learn from—without ever stopping your production line.
              </p>
            </div>
          </div>
          
          {/* From Data Scarcity to Defect Mastery */}
          <div className="mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-symage-blue mb-12 font-sans">
              From Data Scarcity to Defect Mastery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-symage-blue hover:bg-gray-50 transition-all duration-300 animate-scale-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="w-16 h-16 bg-symage-pink/20 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-symage-pink" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-symage-dark mb-4 font-sans">
                    {benefit.title}
                  </h4>
                  <p className="text-symage-dark leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Second row with 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {benefits.slice(3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-symage-blue hover:bg-gray-50 transition-all duration-300 animate-scale-in"
                  style={{ 
                    animationDelay: `${(index + 3) * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="w-16 h-16 bg-symage-pink/20 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-symage-pink" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-symage-dark mb-4 font-sans">
                    {benefit.title}
                  </h4>
                  <p className="text-symage-dark leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;
