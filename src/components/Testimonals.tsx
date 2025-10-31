const Testimonials = () => {
  const stories = [
    {
      name: "Sara",
      quote:
        "I joined the cleanup drive last semester and it completely changed how I see our campus!",
    },
    {
      name: "Bilal",
      quote:
        "It feels great to contribute to something that benefits everyone. Proud to be part of this movement.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold">Volunteer Stories</h2>
      <div className="grid gap-4">
        {stories.map((story, i) => (
          <blockquote key={i} className="border-l-4 pl-4 italic">
            “{story.quote}” — <span className="font-semibold">{story.name}</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
