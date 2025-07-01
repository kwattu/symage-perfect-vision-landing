
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Solution = () => {
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('[data-cta-section]');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processSteps = [
    {
      number: "1",
      title: "Tell Us About Your Product",
      description: "Share your specific defect detection requirements, including your product type, common defects, and quality standards. We'll work with you to understand the unique challenges of your manufacturing process."
    },
    {
      number: "2", 
      title: "We Create Your Synthetic Dataset",
      description: "Our physics-based simulation engine generates thousands of photorealistic images featuring your exact defect types. Every image is perfectly labeled and ready for machine learning training."
    },
    {
      number: "3",
      title: "Train & Deploy Your AI Model",
      description: "Use our synthetic data to train computer vision models that achieve higher accuracy in less time. Deploy with confidence knowing your AI has seen every possible defect scenario."
    }
  ];

  return (
    <section className="py-20 bg-symage-dark relative overflow-hidden">
      {/* Upper section with background image */}
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-symage-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-symage-purple/5 rounded-full blur-3xl"></div>
        
        {/* Data wave background image - cropped to upper section only */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/cc760ac7-e602-49ea-bbca-a000102e3c78.png')`
          }}
        ></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
                How Symage Transforms Your Quality Control
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From concept to deployment in three simple steps. Get the perfect training data for your computer vision models without the traditional bottlenecks.
              </p>
            </div>
            
            {/* Value Propositions - white background with deep blue text and pink subheads */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Perfect Labeling, Every Time",
                  description: "Eliminate human error in data annotation. Our physics-based simulation ensures 100% accurate labels for every defect type, giving your AI models the precise ground truth they need to excel."
                },
                {
                  title: "Scale Without Limits", 
                  description: "Generate millions of training images in days, not years. No more waiting for real defects to occur or manually capturing edge cases. Scale your dataset to match your ambition."
                },
                {
                  title: "Cover Every Edge Case",
                  description: "Simulate rare defects, extreme lighting conditions, and unusual product variations that would take years to collect naturally. Train robust models that handle real-world complexity."
                },
                {
                  title: "Reduce Costs by 90%",
                  description: "Skip expensive data collection, manual annotation, and multiple revision cycles. Get production-ready training data at a fraction of traditional costs."
                },
                {
                  title: "Deploy Faster",
                  description: "Launch your computer vision solutions months ahead of schedule. Perfect training data means fewer iterations, faster convergence, and quicker time-to-market."
                },
                {
                  title: "Maintain Competitive Edge",
                  description: "Access defect scenarios your competitors have never seen. Build AI models with capabilities that set new industry standards for quality control."
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-symage-blue hover:bg-gray-50 transition-all duration-300 animate-scale-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <h3 className="text-xl font-bold text-symage-pink mb-4 font-sans">{item.title}</h3>
                  <p className="text-symage-dark leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Section positioned after white boxes */}
            <div className="text-center mb-16 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
                Ready to improve your product quality?
              </h3>
              <Button 
                size="lg" 
                className="bg-symage-blue hover:bg-symage-blue/90 text-white text-lg px-8 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://www.symage.ai/project-inquiry/', '_blank')}
              >
                Request your free proof-of-concept dataset
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section break before process steps */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-symage-blue/30 to-transparent mb-16"></div>
      
      {/* Lower section without background image */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mid-page heading with additional space */}
          <div className="text-center animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
              Transform Your Quality Control in 3 Simple Steps
            </h2>
          </div>
          
          {/* Process Steps with gradient arrows from deep purple to light blue to pink */}
          <div className="relative max-w-5xl mx-auto mb-24">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="relative mb-8 last:mb-0 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'both' 
                }}
              >
                {/* Arrow Shape with gradient from deep purple to light blue to pink */}
                <div 
                  className="relative p-8 md:p-12"
                  style={{
                    background: `linear-gradient(45deg, #77489d, #56b2e5, #f159b2)`,
                    clipPath: index === processSteps.length - 1 
                      ? 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%, 40px 50%)'
                      : 'polygon(0 0, calc(100% - 80px) 0, 100% 50%, calc(100% - 80px) 100%, 0 100%, 40px 50%)',
                    marginLeft: `${index * 40}px`,
                    marginRight: index === processSteps.length - 1 ? '0px' : `${(processSteps.length - 1 - index) * 40}px`
                  }}
                >
                  <div className="flex items-center gap-6">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-symage-dark">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pr-8">
                      <h3 className="text-2xl font-bold text-white mb-3 font-sans">
                        {step.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Added space after arrows */}
          <div className="mb-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
