
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: "mastering-physics-controls",
      title: "Mastering Physics-Based Controls in Descenders",
      excerpt: "Learn advanced techniques for controlling your bike through challenging terrain and executing perfect landings in this comprehensive guide.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_615455299355eaf552c0d7b0b967d1e40a0ab227.1920x1080.jpg"
    },
    {
      id: "procedural-world-generation",
      title: "The Art of Procedural World Generation",
      excerpt: "Discover how our advanced algorithms create unique, challenging worlds for every single ride, ensuring no two experiences are alike.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_34a1183cdb9b0b86bb1dd2c83e7b2c70b45aa617.1920x1080.jpg"
    },
    {
      id: "extreme-stunts-guide",
      title: "Top 10 Extreme Stunts You Can Pull Off",
      excerpt: "From backflips to tailwhips, explore the most spectacular stunts possible in Descenders and learn how to execute them perfectly.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Guide",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_6c94c5d42a4c39c4a7dad0d4d8b8fcce5f9e4b9e.1920x1080.jpg"
    },
    {
      id: "community-spotlight",
      title: "Community Spotlight: Best User-Created Moments",
      excerpt: "Check out the most incredible moments captured by our amazing community of riders, featuring jaw-dropping stunts and epic fails.",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_41e3c83dcebfb6a6d6bf5b87abf1b7c0c6d57bd7.1920x1080.jpg"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50 to-paper-gray">
      <div className="racing-stripe mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 racing-text-gradient">
            Latest News & Updates
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-rajdhani px-4">
            Stay updated with the latest tips, tricks, and community highlights from the world of Descenders
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-white/90 border-red-200 hover:border-racing-red/50 transition-all duration-300 hover:scale-105 group overflow-hidden h-full flex flex-col paper-shadow"
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
                  <span className="bg-racing-red text-white px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-rajdhani">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="font-orbitron font-bold text-lg sm:text-xl text-gray-800 group-hover:text-racing-red transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="mt-auto">
                <p className="text-gray-600 font-rajdhani leading-relaxed mb-4 text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-gray-500 text-xs sm:text-sm font-rajdhani">
                    {post.date}
                  </span>
                  <Link to={`/news/${post.id}`}>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-racing-red hover:text-white hover:bg-racing-red hover:scale-105 transform transition-all duration-300 font-rajdhani text-sm font-bold border border-racing-red/20 hover:border-racing-red hover:shadow-lg"
                    >
                      Read More
                    </Button>
                  </Link>
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
