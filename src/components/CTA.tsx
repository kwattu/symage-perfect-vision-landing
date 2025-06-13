
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Gift } from "lucide-react";

const CTA = () => {
  const offerPoints = [
    "Up to 10,000 synthetic images",
    "Custom-generated for your specific use case",
    "100% accurate labeling included",
    "Physics-based simulation quality",
    "No strings attached"
  ];

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Gift className="h-10 w-10 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the Future of Quality Control.
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                For Free.
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Ready to see the difference perfect data makes? We're offering qualifying companies a free, proof-of-concept dataset of up to 10,000 synthetic images, custom-generated for your specific use case.
            </p>
          </div>
          
          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h3 className="text-2xl font-bold mb-8">What You'll Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {offerPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Claim My Free Proof-of-Concept Dataset
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <p className="text-blue-200 text-sm mb-4">Trusted by leading manufacturers worldwide</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm">
              <span>✓ No credit card required</span>
              <span>✓ Setup in under 24 hours</span>
              <span>✓ Full technical support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
