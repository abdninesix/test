const GallerySection = () => {
  const images = [
    "/images/cleanup1.jpg",
    "/images/cleanup2.jpg",
    "/images/cleanup3.jpg",
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold">Our Impact</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i + 1}`} className="rounded" />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
