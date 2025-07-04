
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  const offerPoints = [
    "Up to 10,000 synthetic images",
    "Custom-generated for your specific use case",
    "100% accurate labeling included",
    "Physics-based simulation quality",
    "No strings attached"
  ];

  return (
    <section className="py-20 bg-symage-dark relative overflow-hidden" data-cta-section>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-symage-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-symage-pink/10 rounded-full blur-3xl"></div>
      
      {/* Manufacturing background image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/8991e84b-4397-47e1-9ad5-e9038d369ced.png" 
          alt="Manufacturing background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
              Experience the Future of Quality Control.
              <span className="block text-symage-blue">
                For Free.
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Ready to see the difference perfect data makes? We're offering qualifying companies a free, proof-of-concept dataset of up to 10,000 synthetic images, custom-generated for your specific use case.
            </p>
          </div>
          
          {/* Offer Details - white background with pink checkmarks and deep blue text */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 mb-12 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h3 className="text-2xl font-bold mb-8 font-sans text-symage-dark">What You'll Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {offerPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-symage-pink flex-shrink-0" />
                  <span className="text-symage-dark">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button with reduced bottom margin */}
          <div className="animate-fade-in mb-6" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="bg-symage-blue hover:bg-symage-blue/90 text-white text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.symage.ai/project-inquiry/', '_blank')}
            >
              Claim My Free Proof-of-Concept Dataset
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <p className="text-gray-300 text-lg font-medium">Trusted by leading manufacturers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
