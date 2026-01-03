import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the web development landscape this year.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 brings exciting new trends and technologies that are reshaping how we build for the web.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword – it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently than ever before.</p>
      
      <h2>Edge Computing</h2>
      <p>With the rise of edge computing, we're seeing a shift in how applications are architected. By processing data closer to the user, we can achieve lower latency and better performance for end users around the globe.</p>
      
      <h2>WebAssembly Maturity</h2>
      <p>WebAssembly continues to mature, enabling high-performance applications that were previously only possible with native code. This opens up new possibilities for web-based gaming, video editing, and complex data visualization.</p>
      
      <h2>Progressive Web Apps</h2>
      <p>PWAs are becoming the standard for delivering app-like experiences on the web. With improved browser support and new capabilities, the line between web and native apps continues to blur.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new tools and technologies making it easier than ever to build fast, reliable, and engaging web experiences. Stay curious, keep learning, and embrace these changes to stay ahead in the ever-evolving world of web development.</p>
    `,
    author: "Tech Team",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile App",
    excerpt: "Discover how mobile applications can transform your business and reach more customers.",
    content: `
      <p>In today's mobile-first world, having a mobile app for your business is no longer a luxury – it's a necessity. Here's why your business should consider developing a mobile application.</p>
      
      <h2>Enhanced Customer Engagement</h2>
      <p>Mobile apps provide a direct channel to your customers. Push notifications, personalized content, and easy access to your services keep customers engaged and coming back.</p>
      
      <h2>Improved Customer Experience</h2>
      <p>Apps offer faster, more intuitive experiences compared to mobile websites. Native features like camera access, GPS, and offline functionality create seamless user experiences.</p>
      
      <h2>Brand Visibility</h2>
      <p>Your app icon on a customer's phone serves as a constant reminder of your brand. This visibility translates to increased brand recognition and customer loyalty.</p>
      
      <h2>Competitive Advantage</h2>
      <p>Many businesses still haven't embraced mobile apps. By developing one, you position yourself ahead of competitors and demonstrate your commitment to innovation.</p>
      
      <h2>Conclusion</h2>
      <p>A mobile app is an investment in your business's future. The benefits of increased engagement, improved experience, and competitive advantage make it a worthwhile endeavor for businesses of all sizes.</p>
    `,
    author: "Marketing Team",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Digital Marketing Strategies That Work",
    excerpt: "Learn effective digital marketing strategies to boost your online presence and drive growth.",
    content: `
      <p>Digital marketing is essential for business growth in the modern era. Here are proven strategies that can help boost your online presence and drive measurable results.</p>
      
      <h2>Content Marketing</h2>
      <p>Quality content remains king. Creating valuable, relevant content that addresses your audience's needs builds trust and establishes your authority in your industry.</p>
      
      <h2>SEO Optimization</h2>
      <p>Search engine optimization ensures your content reaches the right audience. Focus on both technical SEO and creating content that genuinely helps your users.</p>
      
      <h2>Social Media Strategy</h2>
      <p>Each social platform has its unique audience and content style. Develop platform-specific strategies that resonate with your target demographic.</p>
      
      <h2>Email Marketing</h2>
      <p>Despite being one of the oldest digital marketing channels, email marketing still delivers the highest ROI. Build your list and nurture leads with personalized campaigns.</p>
      
      <h2>Conclusion</h2>
      <p>Successful digital marketing requires a multi-channel approach. By combining these strategies and continuously measuring results, you can achieve sustainable growth for your business.</p>
    `,
    author: "Digital Team",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
];

const relatedBlogs = blogs.slice(0, 3);

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id)) || blogs[0];

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 relative noise-bg">
          <div className="section-container">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground mb-4"
                style={{ background: "var(--gradient-primary)" }}>
                {blog.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <aside className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-32 space-y-6">
                  <div className="p-4 rounded-2xl bg-card border border-border">
                    <h4 className="font-bold mb-4">Share Article</h4>
                    <div className="flex gap-2">
                      <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Share2 className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3 order-1 lg:order-2">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </article>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedBlogs.filter(b => b.id !== blog.id).slice(0, 3).map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  className="group rounded-2xl overflow-hidden bg-card border border-border card-hover"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{relatedBlog.date}</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;
