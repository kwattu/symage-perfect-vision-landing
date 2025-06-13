
import { Car, Cpu, Heart, Package, Wrench, Coffee } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      title: "Automotive & Aerospace",
      description: "Identifying surface imperfections, weld defects, and composite material flaws where safety and performance are non-negotiable.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Electronics & Semiconductor",
      description: "Detecting microscopic defects on PCBs, silicon wafers, and integrated circuits that are impossible for the human eye to see consistently.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Medical Devices & Pharmaceuticals",
      description: "Ensuring the integrity of sterile packaging, verifying pill and capsule quality, and inspecting medical implants for life-or-death compliance.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Package,
      title: "Consumer Packaged Goods (CPG)",
      description: "Guaranteeing label placement, checking for packaging damage, and ensuring product consistency to protect brand image.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Wrench,
      title: "Plastics & Metals Manufacturing",
      description: "Finding molding flaws, surface scratches, color inconsistencies, and structural weaknesses in raw materials and finished goods.",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "Spotting foreign contaminants, verifying seal integrity, and ensuring quality standards to meet safety regulations and maintain consumer confidence.",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powering Defect Detection 
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> Across Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Automated visual inspection is critical wherever perfection is the standard. Symage provides the essential data for a wide range of applications.
            </p>
          </div>
          
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Industry Not Listed?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Symage's physics-based simulation engine can be adapted to virtually any manufacturing or quality control scenario. Let's discuss your specific use case.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg underline underline-offset-4 decoration-2 hover:decoration-blue-600 transition-colors">
              Contact Our Experts →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
