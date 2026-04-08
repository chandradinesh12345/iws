import { Linkedin, Twitter, Github } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

import vishal from "../assets/vishal_img.png";
import karan from "../assets/karan.png";
import amir from "../assets/amir.png";
import Namrata from "../assets/narmita.png";
import dinesh from "../assets/dinesh.png";
import Kamal from "../assets/kamal.png";
import Kailash from "../assets/kailash.png";
import Rajat from "../assets/rajat.jpg";

const team = [
  {
    name: "Mr. Kailash Joshi",
    role: "Founder & CEO",
    image: Kailash,
    social: { linkedin: "https://www.linkedin.com/company/info-web-software-technology/" }
  },
  {
    name: "Mr. Rajat Chaudhary",
    role: "Chief Technology Officer",
    image: Rajat,
    social: { linkedin: "" }
  },
  {
    name: "Mr. Vishal Arya",
    role: "Backend Developer",
    image: vishal,
    social: { linkedin: "https://www.linkedin.com/in/vishal-arya-09806a326/", github: "#" }
  },
  {
    name: "Mr. Dinesh Chandra",
    role: "Senior UI/UX Designer",
    image: dinesh,
    social: { linkedin: "https://www.linkedin.com/in/dineshchandraweb", github: "https://github.com/chandradinesh12345" }
  },
  {
    name: "Mr. Amir Ansari",
    role: "Backend Developer",
    image: amir,
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Mr. Kamal Sati",
    role: "Full Stack Developer",
    image: Kamal,
    social: { linkedin: "https://www.linkedin.com/in/kamalsati", twitter: "https://x.com/KAMALSATI850626" }
  },
  {
    name: "Mr. Karan Bhandari",
    role: "Software Tester",
    image: karan,
    social: { linkedin: "https://www.linkedin.com/in/karan-bhandari-ab6281374", github: "https://github.com/KaranBhandari0001" }
  },
  {
    name: "Ms. Namrata Gupta",
    role: "Junior UI/UX Designer",
    image: Namrata,
    social: { linkedin: "https://www.linkedin.com/in/namrata-gupta-53b140288", github: "https://github.com/namrata-developer" }
  },
];


// 🔥 Reusable Card Component
const TeamCard = ({ member, index }) => {
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Social Icons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-primary hover:text-white">
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-primary hover:text-white">
              <Twitter className="w-4 h-4" />
            </a>
          )}

          {member.social.github && (
            <a href={member.social.github} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-primary hover:text-white">
              <Github className="w-4 h-4" />
            </a>
          )}

        </div>
      </div>

      {/* Info */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-primary text-sm">{member.role}</p>
      </div>
    </div>
  );
};



// 🔥 Main Component
export const TeamSection = () => {
  return (
    <section className="py-24 relative noise-bg">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet The <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our talented team of professionals dedicated to delivering excellence.
          </p>
        </div>


        {/* ✅ Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>


        {/* ✅ Mobile Swiper */}
        <div className="sm:hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {team.map((member, index) => (
              <SwiperSlide key={member.name}>
                <TeamCard member={member} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};