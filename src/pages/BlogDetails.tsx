import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Bookmark, Heart, MessageCircle, Eye, Tag, ChevronRight } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends, tools, and technologies shaping the future of web development",
    content: `
      <div class="blog-content">
        <h2>Introduction</h2>
        <p>The landscape of web development is changing at an unprecedented pace. As we navigate through 2024, new paradigms, tools, and methodologies are reshaping how we build for the web. From AI-powered development to edge computing, the possibilities are expanding exponentially.</p>
        
        <h2>The Rise of AI-Assisted Development</h2>
        <p>Artificial Intelligence is no longer just a buzzword—it's fundamentally changing how developers work. Tools like GitHub Copilot, Cursor, and various AI-powered assistants are becoming integral parts of the development workflow. These tools don't just autocomplete code; they understand context, suggest best practices, and can even generate entire components based on natural language descriptions.</p>
        
        <blockquote>
          <p>"AI won't replace developers, but developers who use AI will replace those who don't."</p>
          <cite>- Industry Expert</cite>
        </blockquote>
        
        <h2>Edge Computing and Serverless</h2>
        <p>The shift towards edge computing represents a fundamental architectural change. Platforms like Vercel Edge Functions, Cloudflare Workers, and Deno Deploy are enabling developers to run code closer to users, dramatically reducing latency and improving performance. Serverless architectures continue to evolve, offering more flexibility and better developer experiences.</p>
        
        <h3>Key Benefits of Edge Computing:</h3>
        <ul>
          <li>Reduced latency for global users</li>
          <li>Improved security with distributed architecture</li>
          <li>Better scalability without infrastructure management</li>
          <li>Cost-effective for variable workloads</li>
        </ul>
        
        <h2>Modern Frontend Frameworks</h2>
        <p>The frontend ecosystem continues to mature with frameworks like React, Vue, and Svelte pushing boundaries. The focus has shifted towards:</p>
        <ul>
          <li><strong>Server Components:</strong> Reducing client-side JavaScript</li>
          <li><strong>Partial Hydration:</strong> Sending only necessary JavaScript</li>
          <li><strong>Islands Architecture:</strong> Combining static and dynamic content seamlessly</li>
        </ul>
        
        <h2>WebAssembly and Beyond</h2>
        <p>WebAssembly is breaking down barriers between languages and the web. From running Python in the browser to complex video editing applications, Wasm is enabling performance-intensive applications that were previously impossible on the web. The integration with JavaScript is becoming seamless, opening new possibilities for cross-platform development.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is bright, diverse, and full of opportunities. Staying current with these trends while maintaining focus on fundamentals will be key to success. The tools and technologies we use will continue to evolve, but the core principles of creating accessible, performant, and user-friendly applications remain constant.</p>
      </div>
    `,
    author: "Sarah Johnson",
    authorAvatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff",
    authorBio: "Senior Frontend Developer with 8+ years of experience in building scalable web applications. Passionate about performance optimization and developer experience.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Performance", "Edge Computing"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
    views: 1243,
    likes: 89,
    comments: 12,
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile App in 2024",
    excerpt: "Understanding the critical role of mobile applications in modern business strategy",
    content: `
      <div class="blog-content">
        <h2>The Mobile-First World</h2>
        <p>In today's digital landscape, mobile devices account for over 60% of all internet traffic. This shift in user behavior has made mobile applications not just an option, but a necessity for businesses looking to stay competitive. A well-designed mobile app can transform how you engage with customers and operate your business.</p>
        
        <h2>Direct Customer Engagement</h2>
        <p>Unlike websites, mobile apps offer a direct line of communication with your customers. Push notifications, in-app messaging, and personalized experiences create opportunities for meaningful engagement that can drive loyalty and repeat business.</p>
        
        <h2>Enhanced Brand Presence</h2>
        <p>Your app lives on your customer's home screen, providing constant brand visibility. This prime real estate ensures your business remains top-of-mind, with every interaction reinforcing your brand identity and values.</p>
      </div>
    `,
    author: "Michael Chen",
    authorAvatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=06b6d4&color=fff",
    authorBio: "Mobile Strategy Consultant specializing in helping businesses leverage mobile technology for growth. Former Product Manager at leading tech companies.",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Mobile Development",
    tags: ["Mobile Apps", "Business Strategy", "UX Design"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
    views: 856,
    likes: 45,
    comments: 8,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id)) || blogs[0];
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const relatedPosts = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${blog.title}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${blog.title}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <ResizableNavbar />

      <main>
        {/* Hero Section with Gradient Animation */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-spin-slow" />
          
          <div className="section-container relative">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group mb-8"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 backdrop-blur-sm">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                {blog.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <img 
                    src={blog.authorAvatar} 
                    alt={blog.author}
                    className="w-10 h-10 rounded-full ring-2 ring-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{blog.author}</div>
                    <div className="text-sm">Author</div>
                  </div>
                </div>
                
                <div className="h-6 w-px bg-border" />
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blog.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image with Parallax Effect */}
        <section className="pb-16">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="pb-24">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12">
                
                {/* Sticky Sidebar */}
                <aside className="lg:col-span-3">
                  <div className="sticky top-32 space-y-6">
                    
                    {/* Author Card */}
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-xl">
                      <div className="text-center">
                        <img 
                          src={blog.authorAvatar} 
                          alt={blog.author}
                          className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-primary/20"
                        />
                        <h3 className="font-bold text-lg mb-2">{blog.author}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{blog.authorBio}</p>
                        <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                          Follow Author
                        </button>
                      </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-xl">
                      <h4 className="font-bold mb-4">Table of Contents</h4>
                      <nav className="space-y-2 text-sm">
                        {blog.content.match(/<h2>(.*?)<\/h2>/g)?.map((heading, idx) => {
                          const text = heading.replace(/<\/?h2>/g, '');
                          const id = text.toLowerCase().replace(/\s+/g, '-');
                          return (
                            <a
                              key={idx}
                              href={`#${id}`}
                              className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              {text}
                            </a>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Engagement Stats */}
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-xl">
                      <h4 className="font-bold mb-4">Engagement</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Views</span>
                          <span className="font-semibold">{blog.views.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Likes</span>
                          <span className="font-semibold">{blog.likes + (liked ? 1 : 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Comments</span>
                          <span className="font-semibold">{blog.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Share Section */}
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-xl">
                      <h4 className="font-bold mb-4">Share Article</h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex-1 p-2 rounded-lg bg-secondary hover:bg-[#1877f2] hover:text-white transition-all duration-300"
                        >
                          <Facebook className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex-1 p-2 rounded-lg bg-secondary hover:bg-[#1da1f2] hover:text-white transition-all duration-300"
                        >
                          <Twitter className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex-1 p-2 rounded-lg bg-secondary hover:bg-[#0a66c2] hover:text-white transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4 mx-auto" />
                        </button>
                        <div className="relative flex-1">
                          <button
                            onClick={() => handleShare('copy')}
                            className="w-full p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            <Share2 className="w-4 h-4 mx-auto" />
                          </button>
                          {showShareTooltip && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap">
                              Link copied!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </aside>

                {/* Article Content */}
                <article className="lg:col-span-9">
                  <div className="prose prose-lg max-w-none 
                    prose-headings:scroll-mt-24
                    prose-headings:font-bold
                    prose-h1:text-4xl
                    prose-h2:text-3xl
                    prose-h2:mt-12
                    prose-h2:mb-6
                    prose-h3:text-2xl
                    prose-h3:mt-8
                    prose-h3:mb-4
                    prose-p:text-muted-foreground
                    prose-p:leading-relaxed
                    prose-p:mb-6
                    prose-a:text-primary
                    prose-a:no-underline
                    prose-a:hover:underline
                    prose-strong:text-foreground
                    prose-li:text-muted-foreground
                    prose-li:mb-2
                    prose-blockquote:border-l-4
                    prose-blockquote:border-primary
                    prose-blockquote:pl-6
                    prose-blockquote:py-2
                    prose-blockquote:italic
                    prose-blockquote:text-muted-foreground
                    prose-blockquote:bg-primary/5
                    prose-blockquote:rounded-r-lg
                    prose-img:rounded-xl
                    prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog/tag/${tag.toLowerCase()}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex items-center justify-between gap-4 py-6 border-y border-border">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          liked ? 'bg-primary/20 text-primary' : 'bg-secondary hover:bg-primary/20'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                        <span>{blog.likes + (liked ? 1 : 0)} Likes</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all duration-300">
                        <MessageCircle className="w-5 h-5" />
                        <span>{blog.comments} Comments</span>
                      </button>
                    </div>
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isBookmarked ? 'bg-primary/20 text-primary' : 'bg-secondary hover:bg-primary/20'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                      <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent">
            <div className="section-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Articles</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover more insights and stories from our blog
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-3 h-3" />
                          {item.author.split(' ')[0]}
                        </div>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;