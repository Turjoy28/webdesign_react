const cardRatios = {
  half: "aspect-[655/450] lg:h-[450px]",
  wide: "aspect-[1320/600] lg:h-[600px]",
};

const defaultPortfolioFallback =
  "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp";

const PortfolioCard = ({
  title,
  year,
  image,
  fallbackImage,
  alt,
  size = "half",
}) => {
  const safeFallbackImage = fallbackImage ?? defaultPortfolioFallback;

  return (
    <article
      className={[
        "group overflow-hidden rounded-[10px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]",
        size === "wide" ? "lg:col-span-2" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden bg-slate-100",
          cardRatios[size] ?? cardRatios.half,
        ].join(" ")}
      >
        <img
          src={image ?? safeFallbackImage}
          alt={alt ?? title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          onError={(event) => {
            if (event.currentTarget.src !== safeFallbackImage) {
              event.currentTarget.onerror = null;
              event.currentTarget.src = safeFallbackImage;
            }
          }}
        />
        <div className="absolute left-4 top-4 rounded-full bg-black/10 px-3 py-1.5 backdrop-blur-sm">
          <p className="text-[11px] font-semibold tracking-[-0.03em] text-white">
            Logoipsum
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-b-[10px] bg-white px-4 py-3">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.04em] text-slate-700">
          {title}
        </h3>
        <span className="text-[11px] font-medium tracking-[0.02em] text-slate-400">
          {year}
        </span>
      </div>
    </article>
  );
};

export default PortfolioCard;
