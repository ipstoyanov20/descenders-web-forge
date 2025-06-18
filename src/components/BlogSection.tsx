
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Mastering Physics-Based Controls in Descenders",
      excerpt: "Learn advanced techniques for controlling your bike through challenging terrain and executing perfect landings in this comprehensive guide.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Art of Procedural World Generation",
      excerpt: "Discover how our advanced algorithms create unique, challenging worlds for every single ride, ensuring no two experiences are alike.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Top 10 Extreme Stunts You Can Pull Off",
      excerpt: "From backflips to tailwhips, explore the most spectacular stunts possible in Descenders and learn how to execute them perfectly.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Spotlight: Best User-Created Moments",
      excerpt: "Check out the most incredible moments captured by our amazing community of riders, featuring jaw-dropping stunts and epic fails.",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 gaming-text-gradient">
            Latest News & Updates
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani px-4">
            Stay updated with the latest tips, tricks, and community highlights from the world of Descenders
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-gaming-purple/50 transition-all duration-300 hover:scale-105 group overflow-hidden h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image}
                  alt={`blog-post-${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span className="bg-gaming-purple px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm font-rajdhani">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="font-orbitron font-bold text-lg sm:text-xl text-white group-hover:text-gaming-purple transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="mt-auto">
                <p className="text-gray-300 font-rajdhani leading-relaxed mb-4 text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-gray-400 text-xs sm:text-sm font-rajdhani">
                    {post.date}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gaming-purple hover:text-white hover:bg-gaming-purple/20 font-rajdhani text-sm"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
