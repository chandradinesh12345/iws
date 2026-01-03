import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Info Web Software offer?",
        answer: "We offer comprehensive technology services including web development, software development, mobile app development, Survey GPT website development, digital marketing services, and IT consulting. Our team specializes in building custom solutions tailored to your business needs.",
      },
      {
        question: "How long has Info Web Software been in business?",
        answer: "Info Web Software was founded in 2020 and has since grown to become a trusted technology partner for businesses across India and globally. We have successfully delivered 100+ projects for 50+ satisfied clients.",
      },
      {
        question: "Do you work with startups or only established businesses?",
        answer: "We work with businesses of all sizes, from early-stage startups to established enterprises. Whether you're launching your first product or scaling an existing solution, we have the expertise to help you succeed.",
      },
    ],
  },
  {
    category: "Project & Pricing",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing depends on the scope and complexity of the project. We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Contact us for a free quote tailored to your specific requirements.",
      },
      {
        question: "What is the typical project timeline?",
        answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months or more. We'll provide a detailed timeline estimate during our initial consultation.",
      },
      {
        question: "Do you require an upfront payment?",
        answer: "Yes, we typically require a deposit (usually 30-50%) before starting work. The remaining amount is paid in milestones or upon project completion, as agreed in the project contract.",
      },
    ],
  },
  {
    category: "Technology & Development",
    questions: [
      {
        question: "What technologies do you use?",
        answer: "We use modern technologies including React, Next.js, Node.js, Laravel, PHP, MongoDB, PostgreSQL, and more. We select the best technology stack based on your project requirements to ensure optimal performance and scalability.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements to keep your application running smoothly.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer: "Absolutely! We can work with existing projects, whether it's adding new features, fixing bugs, or optimizing performance. Our team will conduct a thorough code review before proposing improvements.",
      },
    ],
  },
  {
    category: "Communication & Process",
    questions: [
      {
        question: "How do you communicate during the project?",
        answer: "We maintain transparent communication through regular updates, weekly status meetings, and dedicated project management tools. You'll have a single point of contact for all project-related queries.",
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer: "Your satisfaction is our priority. We involve you at every stage of the project and incorporate your feedback. If any deliverable doesn't meet expectations, we'll work with you to make necessary revisions.",
      },
      {
        question: "Do you sign NDAs?",
        answer: "Yes, we're happy to sign Non-Disclosure Agreements to protect your confidential information and intellectual property. We take data security and privacy very seriously.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative noise-bg">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-30" />
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <HelpCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="w-1.5 h-8 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.category}-${index}`}
                      className="border border-border rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
