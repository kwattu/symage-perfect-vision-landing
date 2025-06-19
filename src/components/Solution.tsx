
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Target, BarChart3, Lightbulb, Clock, DollarSign, Search, RefreshCw } from "lucide-react";

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
      description: "Train your AI on every conceivable variation of lighting, angle, material texture, and shadow, teaching it what's a real defect vs. what's just noise."
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
      number: "01",
      title: "Model Your Reality",
      description: "We work with you to create a high-fidelity 3D model of your product and its specific defect types (e.g., scratches, dents, misprints, contamination)."
    },
    {
      number: "02", 
      title: "Generate & Diversify",
      description: "We automatically generate thousands of synthetic images, randomizing variables like lighting, camera position, and defect severity. Every image is perfectly and automatically labeled."
    },
    {
      number: "03",
      title: "Train & Deploy", 
      description: "Integrate your new, robust dataset into your existing AI platform (or use ours) and deploy a more intelligent, accurate inspection model."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-symage-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-symage-purple/4 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-symage-purple to-symage-blue rounded-full mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 font-sans leading-tight tracking-tight">
              The Solution: 
              <span className="block font-semibold bg-gradient-to-r from-symage-purple to-symage-blue bg-clip-text text-transparent">
                Data You Control, Not Just Collect
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Synthetic data is the breakthrough your quality program needs. We create a digital twin of your product and its manufacturing environment. From there, we can generate a virtually infinite library of computer-generated, 100% accurate training data.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                It's not just "fake" data. It's a <span className="font-semibold text-symage-purple">photorealistic simulation of your reality</span>, giving you complete control to create the exact scenarios your AI needs to learn from—without ever stopping your production line.
              </p>
            </div>
          </div>

          {/* From Data Scarcity to Defect Mastery */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 font-sans">
                From Data Scarcity to 
                <span className="block font-semibold bg-gradient-to-r from-symage-purple to-symage-blue bg-clip-text text-transparent">
                  Defect Mastery
                </span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-symage-purple/10 to-symage-blue/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-symage-purple" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {benefits.slice(3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-slide-in-left"
                  style={{ 
                    animationDelay: `${(index + 3) * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-symage-purple/10 to-symage-blue/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-symage-purple" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tell Us What You Need */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 font-sans">
                Tell Us What You Need.
                <span className="block font-semibold bg-gradient-to-r from-symage-purple to-symage-blue bg-clip-text text-transparent">
                  We'll Handle the Rest.
                </span>
              </h3>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className="group flex items-start space-x-8 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.2}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-symage-purple to-symage-blue flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">{step.title}</h4>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-symage-purple/5 via-symage-blue/5 to-symage-purple/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-symage-purple to-symage-blue rounded-3xl p-12 text-white animate-scale-in">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-sans">
                  Ready to Transform Your Quality Control?
                </h3>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  Join leading manufacturers who have revolutionized their defect detection with synthetic data.
                </p>
                <Button size="lg" className="bg-white text-symage-purple hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
