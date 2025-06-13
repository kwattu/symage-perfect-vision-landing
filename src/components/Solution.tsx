
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Target, BarChart3, Lightbulb } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Eradicate Labeling Errors",
      description: "Our data is 100% accurate, providing a perfect source of truth so your models learn to identify defects with maximum precision."
    },
    {
      icon: Zap,
      title: "Accelerate Time-to-Deployment",
      description: "Generate a perfectly balanced, custom dataset of millions of images in days, not months, slashing your development timelines."
    },
    {
      icon: Lightbulb,
      title: "Master Every Edge Case",
      description: "We can simulate any defect imaginable, from subtle scratches and microscopic cracks to rare material deformities, ensuring your AI is prepared for any scenario."
    },
    {
      icon: BarChart3,
      title: "Achieve Peak Model Performance",
      description: "Significantly boost your model's accuracy, reduce false positives, and increase throughput by training on data that is superior to real-world captures."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-symage-text-dark mb-6 font-sans">
              Introducing Symage: From Flawed Data to 
              <span className="text-transparent bg-gradient-to-r from-symage-primary to-symage-secondary bg-clip-text"> Flawless Detection</span>
            </h2>
            <p className="text-xl text-symage-medium-gray max-w-4xl mx-auto leading-relaxed">
              Symage bridges the gap between the real world and the ideal data your AI needs. We generate photorealistic, pixel-perfect synthetic data, engineered for your exact products and inspection challenges.
            </p>
          </div>
          
          {/* Main Value Prop */}
          <div className="bg-symage-light-gray rounded-3xl p-8 md:p-12 border border-gray-200 mb-16 animate-scale-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-symage-primary to-symage-secondary rounded-full mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-symage-text-dark mb-4 font-sans">Physics-Based Simulation Engine</h3>
              <p className="text-lg text-symage-medium-gray max-w-3xl mx-auto">
                Our proprietary, physics-based simulation engine replicates real-world conditions with unparalleled fidelity, ensuring your AI is trained on a dataset free from human error, bias, or generative artifacts.
              </p>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-symage-text-dark mb-12 animate-fade-in font-sans">
              With Symage, you can:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group animate-slide-in-left"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-symage-primary to-symage-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-symage-text-dark mb-3 font-sans">{benefit.title}</h4>
                      <p className="text-symage-medium-gray leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-symage-primary to-symage-secondary rounded-3xl p-8 md:p-12 text-white animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sans">
              Ready to Transform Your Quality Control?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join leading manufacturers who have already revolutionized their defect detection with Symage's synthetic data.
            </p>
            <Button size="lg" className="bg-white text-symage-primary hover:bg-gray-100 text-lg px-8 py-4 h-auto">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
