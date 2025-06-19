
const Industries = () => {
  const industries = [
    {
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=300&fit=crop",
      title: "Automotive & Aerospace",
      description: "Identifying surface imperfections, weld defects, and composite material flaws where safety and performance are non-negotiable.",
      duotone: "from-symage-blue/80 to-symage-dark/60"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Electronics & Semiconductor",
      description: "Detecting microscopic defects on PCBs, silicon wafers, and integrated circuits that are impossible for the human eye to see consistently.",
      duotone: "from-symage-purple/80 to-symage-dark/60"
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      title: "Medical Devices & Pharmaceuticals",
      description: "Ensuring the integrity of sterile packaging, verifying pill and capsule quality, and inspecting medical implants for life-or-death compliance.",
      duotone: "from-symage-blue/80 to-symage-purple/60"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      title: "Consumer Packaged Goods (CPG)",
      description: "Guaranteeing label placement, checking for packaging damage, and ensuring product consistency to protect brand image.",
      duotone: "from-symage-purple/80 to-symage-blue/60"
    },
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      title: "Plastics & Metals Manufacturing",
      description: "Finding molding flaws, surface scratches, color inconsistencies, and structural weaknesses in raw materials and finished goods.",
      duotone: "from-symage-dark/80 to-symage-purple/60"
    },
    {
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=400&h=300&fit=crop",
      title: "Food & Beverage",
      description: "Spotting foreign contaminants, verifying seal integrity, and ensuring quality standards to meet safety regulations and maintain consumer confidence.",
      duotone: "from-symage-blue/80 to-symage-dark/60"
    }
  ];

  return (
    <section className="py-20 bg-symage-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
              Powering Defect Detection 
              <span className="text-white"> Across Industries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Automated visual inspection is critical wherever perfection is the standard. Symage provides the essential data for a wide range of applications.
            </p>
          </div>
          
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-symage-dark/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans">
              Your Industry Not Listed?
            </h3>
            <p className="text-base text-gray-300 mb-4 max-w-xl mx-auto">
              Symage's physics-based simulation engine can be adapted to virtually any manufacturing or quality control scenario.
            </p>
            <button className="text-symage-blue hover:text-symage-blue/80 font-semibold text-base underline underline-offset-4 decoration-2 hover:decoration-symage-blue transition-colors">
              Contact Our Experts →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
