
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      title: "Tell Us What You Need",
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-symage-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-symage-purple/5 rounded-full blur-3xl"></div>
      
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
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'both' 
                }}
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-symage-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center font-sans">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  {step.description}
                </p>
                
                {/* Connection Arrow (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-symage-blue/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center mb-20 animate-fade-in">
            <Button 
              onClick={scrollToCTA}
              className="bg-symage-dark hover:bg-symage-dark/90 text-white border border-symage-blue px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ready to transform your quality control?
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-sans">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
