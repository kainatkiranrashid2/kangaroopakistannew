import React, { useState } from "react";

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

  const categories = ["All", "IKMC", "IKSC", "IKLC", "Events", "Awards"];

  const filteredImages =
    activeFilter === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-indigo-600 py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Celebrating excellence, creativity, and the brilliant minds shaping
            the future of Pakistan.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-xl scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative rounded-[40px] overflow-hidden bg-white shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-xl">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}>
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:scale-110 transition-transform z-10">
              ×
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-2">
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
        <div className="py-32 text-center text-gray-400">
          <div className="text-6xl mb-4">📸</div>
          <p className="text-xl font-medium">
            No photos found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
