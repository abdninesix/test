const DonationSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Make a Donation</h2>
      <p className="text-gray-700">
        Every rupee counts! Your contribution directly supports campus
        cleanliness initiatives.
      </p>
      <form className="flex flex-col gap-2 max-w-sm">
        <input
          type="number"
          placeholder="Enter amount (PKR)"
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-green-500 text-white font-semibold rounded">
          Donate Now
        </button>
      </form>
    </section>
  );
};

export default DonationSection;
