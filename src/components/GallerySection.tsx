
const GallerySection = () => {
  const images = [
    {
      url: "/img1.jpg",
      alt: "descenders-downhill-mountain-biking-action",
      title: "Extreme Downhill Racing"
    },
    {
      url: "/img2.jpg",
      alt: "descenders-bike-jump-stunt",
      title: "Death-Defying Stunts"
    },
    {
      url: "/img3.jpg",
      alt: "descenders-forest-trail-biking",
      title: "Forest Trail Adventures"
    },
    {
      url: "/img4.jpg",
      alt: "descenders-mountain-sunset-ride",
      title: "Epic Mountain Views"
    },
    {
      url: "/img5.jpg",
      alt: "descenders-professional-gameplay",
      title: "Professional Gameplay"
    },
    {
      url: "/img6.jpg",
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
