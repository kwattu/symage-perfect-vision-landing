
import { Car, Cpu, Heart, Package, Wrench, Coffee } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      title: "Automotive & Aerospace",
      description: "Identifying surface imperfections, weld defects, and composite material flaws where safety and performance are non-negotiable.",
      color: "from-symage-primary to-blue-600"
    },
    {
      icon: Cpu,
      title: "Electronics & Semiconductor",
      description: "Detecting microscopic defects on PCBs, silicon wafers, and integrated circuits that are impossible for the human eye to see consistently.",
      color: "from-purple-500 to-symage-primary"
    },
    {
      icon: Heart,
      title: "Medical Devices & Pharmaceuticals",
      description: "Ensuring the integrity of sterile packaging, verifying pill and capsule quality, and inspecting medical implants for life-or-death compliance.",
      color: "from-red-500 to-symage-accent"
    },
    {
      icon: Package,
      title: "Consumer Packaged Goods (CPG)",
      description: "Guaranteeing label placement, checking for packaging damage, and ensuring product consistency to protect brand image.",
      color: "from-symage-secondary to-green-600"
    },
    {
      icon: Wrench,
      title: "Plastics & Metals Manufacturing",
      description: "Finding molding flaws, surface scratches, color inconsistencies, and structural weaknesses in raw materials and finished goods.",
      color: "from-gray-500 to-symage-medium-gray"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "Spotting foreign contaminants, verifying seal integrity, and ensuring quality standards to meet safety regulations and maintain consumer confidence.",
      color: "from-symage-accent to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-symage-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-symage-text-dark mb-6 font-sans">
              Powering Defect Detection 
              <span className="text-transparent bg-gradient-to-r from-symage-primary to-symage-secondary bg-clip-text"> Across Industries</span>
            </h2>
            <p className="text-xl text-symage-medium-gray max-w-4xl mx-auto">
              Automated visual inspection is critical wherever perfection is the standard. Symage provides the essential data for a wide range of applications.
            </p>
          </div>
          
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-symage-text-dark mb-4 font-sans">{industry.title}</h3>
                  <p className="text-symage-medium-gray leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-symage-text-dark mb-4 font-sans">
              Your Industry Not Listed?
            </h3>
            <p className="text-lg text-symage-medium-gray mb-6 max-w-2xl mx-auto">
              Symage's physics-based simulation engine can be adapted to virtually any manufacturing or quality control scenario. Let's discuss your specific use case.
            </p>
            <button className="text-symage-primary hover:text-symage-primary/80 font-semibold text-lg underline underline-offset-4 decoration-2 hover:decoration-symage-primary transition-colors">
              Contact Our Experts →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
