const clients = [
  { name: "aimaxhub", logo: "./src/assets/clients/aimaxhub.webp" },
  { name: "aimaxhub", logo: "./src/assets/clients/AutozCrave.webp" },
  { name: "aimaxhub", logo: "./src/assets/clients/pantnagar.webp" },
  { name: "aimaxhub", logo: "./src/assets/clients/virnam.webp" },
  { name: "aimaxhub", logo: "./src/assets/clients/one_support_one_life.png" },
  { name: "aimaxhub", logo: "./src/assets/clients/dollar_gc.png" },
  { name: "aimaxhub", logo: "./src/assets/clients/Bijatech_logo.png" },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border relative overflow-hidden bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium text-lg">
            Trusted by Leading Companies
          </p>
        </div>

        {/* Client Logos Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center px-8 py-6 rounded-xl bg-card border border-border hover:border-primary/50 min-w-[160px] transition-all duration-300 hover:shadow-lg group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 w-50 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
