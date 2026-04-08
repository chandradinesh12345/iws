import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Himanshu Joshi",
    //role: "CEO, TechStart India",
    image: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80",
    content: "Great service, thank you Info Web Software. One of the best IT companies in Haldwani, Uttarakhand. Highly professional team and always supportive. I strongly recommend them to others.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
   // role: "Founder, HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Amazing experience working with Info Web Software. Their team understands requirements clearly and delivers high-quality results on time. Truly reliable IT partner.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    //role: "Director, Global Exports Ltd",
    image: "https://img.freepik.com/free-photo/young-businessman-happy-expression_1194-1632.jpg?semt=ais_hybrid&w=740&q=80",
    content: "Best software company in Haldwani! Info Web Software provided excellent service with great communication and support. Very happy with the final outcome.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    //role: "CTO, EduLearn Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Highly impressed with the professionalism of Info Web Software. They delivered my project exactly as expected and even suggested improvements. Great experience overall.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
   // role: "Manager, FinanceHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "If you're looking for a trusted IT company, Info Web Software is the best choice. Fast delivery, quality work, and excellent customer support.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-secondary/30 relative noise-bg overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          {/* Testimonial Slider */}
<div className="overflow-hidden">
  <div 
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    
    {testimonials.map((item, index) => (
      <div key={index} className="min-w-full px-2">
        
        <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              
              {/* Rating */}
              <div className="flex gap-1 justify-center md:justify-start mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-muted-foreground mb-6 italic">
                "{item.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold text-xl">{item.name}</div>
                {/* <div className="text-primary">{item.role}</div> */}
              </div>
            </div>

          </div>
        </div>

      </div>
    ))}

  </div>
</div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
