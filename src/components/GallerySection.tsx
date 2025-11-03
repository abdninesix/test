import { images } from "../data";

const GallerySection = () => {

  return (
    <section id="gallery" className="min-h-screen bg-white flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-mytheme">
        Our Targets<p className="text-base">(Incomplete section)</p>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Cleanup ${i + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
