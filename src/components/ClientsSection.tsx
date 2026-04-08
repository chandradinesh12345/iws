import aimaxhub from "@/assets/clients/aimaxhub.webp";
import autozCrave from "@/assets/clients/AutozCrave.webp";
import pantnagar from "@/assets/clients/pantnagar.webp";
import virnam from "@/assets/clients/virnam.webp";
import oneSupport from "@/assets/clients/one_support_one_life.png";
import dollarGc from "@/assets/clients/dollar_gc.png";
import bijatech from "@/assets/clients/Bijatech_logo.png";



const clients = [
  { name: "aimaxhub", logo: aimaxhub },
  { name: "AutozCrave", logo: autozCrave },
  { name: "pantnagar", logo: pantnagar },
  { name: "virnam", logo: virnam },
  { name: "one_support_one_life", logo: oneSupport },
  { name: "dollar_gc", logo: dollarGc },
  { name: "Bijatech_logo", logo: bijatech },
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
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-marquee gap-6 md:gap-12 whitespace-nowrap w-max">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center px-4 md:px-8 py-4 md:py-6 rounded-xl bg-card border border-border min-w-[120px] md:min-w-[160px]"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
