import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

import user_review_1 from "../assets/user_review_1.png";
import user_review_2 from "../assets/user_review_2.png";
import user_review_3 from "../assets/user_review_3.png";

const testimonials = [
  {
    name: "Aimax Hub",
    role: "E-commerce Platform",
    thumbnail: user_review_1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "AutozCrave",
    role: "Automobile Brand",
    thumbnail: user_review_2,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Pantnagar",
    role: "Education Sector",
    thumbnail: user_review_3,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export const VideoTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);

  // ✅ FIX: observer after videos mount
  useEffect(() => {
    if (!videoRefs.current.length) return;

    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (!entry.isIntersecting && video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
  },
  { threshold: 0.4 }
);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [activeIndex]); // 🔥 important

  const handlePlay = (index) => {
    setActiveIndex(index);

    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    setTimeout(() => {
      videoRefs.current[index]?.play();
    }, 100);
  };

  return (
    <section className="pt-24 relative noise-bg">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Review
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Clients <span className="text-gradient">Speak</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from clients who trust our technology and results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-[320px] md:h-[400px]">

                {/* Video */}
                <video
                  ref={(el) => (videoRefs.current[index] = el || null)}
                  src={item.video}
                  controls
                  className={`w-full h-full object-cover ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                />

                {/* Thumbnail */}
                {activeIndex !== index && (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div
                      onClick={() => handlePlay(index)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition">
                        <Play className="text-black ml-1" size={20} />
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Improved Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-gradient">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};