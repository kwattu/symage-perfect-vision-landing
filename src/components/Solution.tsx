
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Target, BarChart3, Lightbulb, Clock, DollarSign, Search, RefreshCw, ArrowDown } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: Zap,
      title: "LAUNCH FASTER",
      description: "Generate a complete dataset for a new product before it even hits the production line. Train your models in parallel with product development."
    },
    {
      icon: Target,
      title: "CRUSH FALSE POSITIVES",
      description: "Train your AI on every conceivable variation of lighting, angle, material texture, and shadow, teaching it what's a real defect vs. what's noise."
    },
    {
      icon: DollarSign,
      title: "SLASH YOUR BUDGET",
      description: "Eliminate the massive operational costs and man-hours required for manual data collection, photography, and annotation."
    },
    {
      icon: Search,
      title: "FIND THE UNFINDABLE",
      description: "Create thousands of examples of rare, subtle, or complex defects to train models that achieve near-perfect accuracy and recall."
    },
    {
      icon: RefreshCw,
      title: "ADAPT INSTANTLY",
      description: "When a new defect appears, simply model and generate new data in hours, not weeks. Keep your AI constantly improving without downtime."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Model Your Reality",
      description: "We work with you to create a high-fidelity 3D model of your product and its specific defect types (e.g., scratches, dents, misprints, contamination)."
    },
    {
      number: "2", 
      title: "Generate & Diversify",
      description: "We automatically generate thousands of synthetic images, randomizing variables like lighting, camera position, and defect severity. Every image is perfectly and automatically labeled."
    },
    {
      number: "3",
      title: "Train & Deploy", 
      description: "Integrate your new, robust dataset into your existing AI platform (or use ours) and deploy a more intelligent, accurate inspection model."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements - no gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="w-1 h-16 bg-symage-purple mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 font-sans leading-tight tracking-tight">
              The Solution: 
              <span className="block font-medium text-slate-900 mt-2">
                Data You Control, Not Just Collect
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Synthetic data is the breakthrough your quality program needs. We create a digital twin of your product and its manufacturing environment. From there, we can generate a virtually infinite library of computer-generated, 100% accurate training data.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                It's not just "fake" data. It's a <span className="font-medium text-symage-purple">photorealistic simulation of your reality</span>, giving you complete control to create the exact scenarios your AI needs to learn from—without ever stopping your production line.
              </p>
            </div>
          </div>

          {/* From Data Scarcity to Defect Mastery */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 font-sans">
                From Data Scarcity to 
                <span className="block font-medium text-slate-900 mt-2">
                  Defect Mastery
                </span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="group bg-symage-dark rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-slide-in-left text-center text-white"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">{benefit.title}</h4>
                  <p className="text-white/80 leading-relaxed font-light text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
              {benefits.slice(3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="group bg-symage-dark rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-slide-in-left text-center text-white"
                  style={{ 
                    animationDelay: `${(index + 3) * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">{benefit.title}</h4>
                  <p className="text-white/80 leading-relaxed font-light text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Small CTA */}
          <div className="text-center mb-20">
            <Button size="sm" className="bg-symage-dark text-white hover:bg-slate-800 text-sm px-6 py-2 h-auto font-medium rounded-lg">
              Ready to Transform Your Quality Control?
            </Button>
            <div className="flex justify-center mt-4">
              <ArrowDown className="h-5 w-5 text-slate-400 animate-bounce" />
            </div>
          </div>

          {/* Tell Us What You Need - Process Flow Chart with different background */}
          <div className="bg-slate-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 font-sans">
                Tell Us What You Need.
                <span className="block font-medium text-slate-900 mt-2">
                  We'll Handle the Rest.
                </span>
              </h3>
            </div>

            {/* Process Flow Chart */}
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Connection Lines */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.number}
                      className="relative animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 0.2}s`, 
                        animationFillMode: 'both' 
                      }}
                    >
                      {/* Step Circle */}
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-symage-purple rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-2xl font-bold text-white">{step.number}</span>
                          </div>
                          {/* Connector dot for mobile */}
                          {index < processSteps.length - 1 && (
                            <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-300 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="max-w-xs">
                          <h4 className="text-xl font-semibold text-slate-900 mb-4 font-sans">{step.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed font-light">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Mobile connector line */}
                      {index < processSteps.length - 1 && (
                        <div className="lg:hidden flex justify-center mt-6 mb-2">
                          <div className="w-px h-8 bg-slate-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
