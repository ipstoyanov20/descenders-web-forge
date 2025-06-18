
const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "mountain-biking-downhill-action",
      title: "Extreme Downhill Racing"
    },
    {
      url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "mountain-bike-jump-stunt",
      title: "Death-Defying Stunts"
    },
    {
      url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "mountain-biking-forest-trail",
      title: "Forest Trail Adventures"
    },
    {
      url: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "mountain-bike-sunset-ride",
      title: "Epic Mountain Views"
    },
    {
      url: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "professional-mountain-biker",
      title: "Professional Gameplay"
    },
    {
      url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "mountain-biking-competition",
      title: "Competitive Racing"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 gaming-text-gradient">
            Game Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani px-4">
            Experience the thrill and beauty of extreme mountain biking in Descenders
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl gaming-border-gradient"
            >
              <div className="aspect-video">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="font-orbitron font-bold text-white text-sm sm:text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
