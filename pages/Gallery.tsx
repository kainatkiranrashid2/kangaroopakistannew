import React, { useState, useEffect, useRef } from "react";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: "IKMC" | "IKSC" | "IKLC" | "Events" | "Awards";
}

const GALLERY_DATA: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000",
    title: "Mathematics Workshop",
    category: "IKMC",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000",
    title: "Science Lab Challenge",
    category: "IKSC",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000",
    title: "Linguistic Talents",
    category: "IKLC",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1544928147-7972fc46599e?q=80&w=1000",
    title: "Global Winners 2024",
    category: "Awards",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1000",
    title: "Annual Symposium",
    category: "Events",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
    title: "Young Minds at Work",
    category: "IKMC",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000",
    title: "Science Fair Excellence",
    category: "IKSC",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=1000",
    title: "Language Masters",
    category: "IKLC",
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000",
    title: "Award Ceremony DHA",
    category: "Awards",
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1523050338692-7b83b90b1e3f?q=80&w=1000",
    title: "International Camp",
    category: "Events",
  },
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const categories = ["All", "IKMC", "IKSC", "IKLC", "Events", "Awards"];

  const filteredImages =
    activeFilter === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((img) => img.category === activeFilter);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with data-animate attribute
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroElements = document.querySelectorAll('.parallax-element');
      heroElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  const stats = [
    { label: "Photo Categories", value: "5+" },
    { label: "Captured Moments", value: "1000+" },
    { label: "Contest Events", value: "50+" },
    { label: "Award Ceremonies", value: "25+" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent"></div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-float parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float animate-delay-1000 parallax-element" data-speed="0.5"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse animate-delay-500 parallax-element" data-speed="0.2"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-cyan-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '1.5s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span 
            data-animate
            id="gallery-badge"
            className={`inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible('gallery-badge') ? 'animate-bounce-in' : 'opacity-0 translate-y-4'
            }`}
          >
            📸 VISUAL JOURNEY OF EXCELLENCE
          </span>
          
          <h1 
            data-animate
            id="gallery-title"
            className={`text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight transition-all duration-1000 ${
              isVisible('gallery-title') ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-8'
            }`}
          >
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient-x">Brilliance</span>
            <br />
            <span className="text-4xl lg:text-5xl text-indigo-300">Captured Forever</span>
          </h1>
          
          <p 
            data-animate
            id="gallery-description"
            className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ${
              isVisible('gallery-description') ? 'animate-fade-in-up animate-delay-500' : 'opacity-0 translate-y-8'
            }`}
          >
            Celebrating excellence, creativity, and the brilliant minds shaping the future of Pakistan. 
            Explore our collection of memorable moments from contests, ceremonies, and achievements.
          </p>

          {/* Stats Section */}
          {/* <div 
            data-animate
            id="gallery-stats"
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10 transition-all duration-1000 ${
              isVisible('gallery-stats') ? 'animate-slide-up animate-delay-700' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, i) => (
              <div key={i} className={`text-center animate-count-up animate-delay-${(i + 1) * 200}`}>
                <div className="text-3xl lg:text-4xl font-black text-white mb-1 animate-pulse-glow">
                  {stat.value}
                </div>
                <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          <div 
            data-animate
            id="gallery-cta"
            className={`mt-12 transition-all duration-1000 ${
              isVisible('gallery-cta') ? 'animate-fade-in-up animate-delay-1000' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all animate-pulse-glow">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></span>
              Scroll down to explore our gallery
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div 
          data-animate
          id="filter-section"
          className={`transition-all duration-1000 ${
            isVisible('filter-section') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Filter through our collection to find specific moments from different contests and events.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 animate-scale-in animate-delay-${(index + 1) * 100} ${
                  activeFilter === cat
                    ? "bg-indigo-600 text-white shadow-xl scale-105 animate-pulse-glow"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:scale-105 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div 
          data-animate
          id="gallery-grid"
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ${
            isVisible('gallery-grid') ? 'animate-fade-in-up animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative rounded-[40px] overflow-hidden bg-white shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-scale-in animate-delay-${(index + 1) * 100} hover:animate-pulse-glow`}
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 lg:p-8">
                <span className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-2 animate-bounce-in">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg lg:text-xl animate-slide-up">{image.title}</h3>
              </div>
              
              {/* Hover overlay with view icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-in">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in duration-300"
          onClick={() => setSelectedImage(null)}>
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:scale-110 transition-transform z-10 hover:animate-bounce-in">
              ×
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 text-center animate-slide-up">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-2 animate-bounce-in">
                  {selectedImage.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedImage.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="py-16 text-center text-gray-400 animate-fade-in-up">
          <div className="text-6xl mb-4 animate-bounce-in">📸</div>
          <p className="text-xl font-medium animate-slide-up animate-delay-200">
            No photos found in this category yet.
          </p>
          <p className="text-sm mt-2 animate-fade-in-up animate-delay-500">
            Check back soon for more amazing moments!
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
