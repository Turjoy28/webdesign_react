const marqueeItems = [
  "Great in UI/UX",
  "Best design communicator",
  "Clean React structure",
  "Responsive Tailwind layouts",
  "Fast iteration workflow",
];

const loopedItems = [...marqueeItems, ...marqueeItems];

const MarqueeSection = () => {
  return (
    <section
      className="overflow-hidden border-b border-slate-200 py-6"
      aria-label="Studio review highlights"
    >
      <div className="flex w-max animate-marquee gap-4 px-4 sm:px-6 lg:px-8">
        {loopedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
