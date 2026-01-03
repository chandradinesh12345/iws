import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, ArrowUpRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the web development landscape this year.",
    author: "Tech Team",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile App",
    excerpt: "Discover how mobile applications can transform your business and reach more customers.",
    author: "Marketing Team",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Digital Marketing Strategies That Work",
    excerpt: "Learn effective digital marketing strategies to boost your online presence and drive growth.",
    author: "Digital Team",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Blog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Stay updated with the latest trends, tips, and news from the tech world.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="btn-secondary group self-start md:self-auto"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid - Featured + Regular */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <Link 
            to={`/blog/${blogs[0].id}`}
            className="group relative rounded-3xl overflow-hidden bg-card border border-border card-hover lg:row-span-2"
          >
            <div className="absolute inset-0">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
            </div>
            <div className="relative h-full min-h-[500px] p-8 flex flex-col justify-end">
              <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: "var(--gradient-primary)", color: "white" }}>
                {blogs[0].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-background group-hover:text-primary transition-colors">
                {blogs[0].title}
              </h3>
              <p className="text-background/80 mb-6 line-clamp-2">
                {blogs[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-background/70">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogs[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogs[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogs[0].readTime}
                </span>
              </div>
            </div>
          </Link>

          {/* Regular Posts */}
          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group flex gap-6 p-4 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 hidden sm:block">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
