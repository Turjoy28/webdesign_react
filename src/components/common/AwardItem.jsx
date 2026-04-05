const AwardItem = ({ title, brand, year }) => {
  return (
    <article className="card-dark flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{brand}</p>
      </div>
      <span className="text-sm font-medium uppercase tracking-[0.16em] text-lime-600">
        {year}
      </span>
    </article>
  );
};

export default AwardItem;
