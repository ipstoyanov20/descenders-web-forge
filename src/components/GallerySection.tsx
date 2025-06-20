const GallerySection = () => {
  const images = [
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_615455299355eaf552c0d7b0b967d1e40a0ab227.1920x1080.jpg",
      alt: "descenders-downhill-mountain-biking-action",
      title: "Extreme Downhill Racing"
    },
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_34a1183cdb9b0b86bb1dd2c83e7b2c70b45aa617.1920x1080.jpg",
      alt: "descenders-bike-jump-stunt",
      title: "Death-Defying Stunts"
    },
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_6c94c5d42a4c39c4a7dad0d4d8b8fcce5f9e4b9e.1920x1080.jpg",
      alt: "descenders-forest-trail-biking",
      title: "Forest Trail Adventures"
    },
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_41e3c83dcebfb6a6d6bf5b87abf1b7c0c6d57bd7.1920x1080.jpg",
      alt: "descenders-mountain-sunset-ride",
      title: "Epic Mountain Views"
    },
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_86b9e2c6efb9e55b5a3fe5b10c5a9fe17cf91e6b.1920x1080.jpg",
      alt: "descenders-professional-gameplay",
      title: "Professional Gameplay"
    },
    {
      url: "https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_7a8b8d3c5a5c5e5c4c6b7d8e9f0a1b2c3d4e5f6.1920x1080.jpg",
      alt: "descenders-competitive-racing",
      title: "Competitive Racing"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-paper-gray to-white">
      <div className="racing-stripe mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 racing-text-gradient">
            Game Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-rajdhani px-4">
            Experience the thrill and beauty of extreme mountain biking in Descenders
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl racing-border-gradient paper-shadow"
            >
              <div className="aspect-video">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-racing-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <div className="racing-stripe mt-8"></div>
    </section>
  );
};

export default GallerySection;
