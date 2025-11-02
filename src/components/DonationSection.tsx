const DonationSection = () => {
  return (
    <section id="donate" className="h-[calc(100vh-3rem)] flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-mytheme">
        Make a Donation <p className="text-base">(Non-functional feature at the moment.)</p>
      </h2>
      <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
        Every rupee you contribute directly supports cleaning drives, eco-friendly
        initiatives, and awareness activities on campus.
      </p>

      <form className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
        <input
          type="number"
          placeholder="Enter amount (PKR)"
          className="border rounded px-3 py-2 flex-1 text-gray-800"
        />
        <button
          type="submit"
          className="cursor-pointer bg-mytheme text-white font-semibold rounded px-6 py-2 hover:bg-mytheme/80"
        >
          Donate
        </button>
      </form>

      <p className="text-sm text-gray-500">
        Secure payments via Easypaisa, JazzCash, and Credit Card
      </p>
    </section>
  );
};

export default DonationSection;
