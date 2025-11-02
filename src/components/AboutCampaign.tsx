const AboutCampaign = () => {
  return (
    <section id="about" className="h-[calc(100vh-3rem)] flex items-center justify-center bg-white">
      <div className="max-w-2xl flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-mytheme">
          About the Campaign
        </h2>
        <p className="text-gray-700 text-justify text-base sm:text-lg leading-relaxed">
          Our university is home to thousands of students, staff, and visitors every day.
          Together, we can ensure it remains clean and welcoming. This campaign funds
          eco-friendly bins, student-led clean-up drives, and awareness programs that
          inspire responsibility and sustainability across campus.
        </p>
      </div>
    </section>
  );
};

export default AboutCampaign;
