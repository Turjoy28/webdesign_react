const StatCard = ({ number, label, description, className = "" }) => {
  return (
    <article className={["card-dark p-6", className].filter(Boolean).join(" ")}>
      <p className="text-3xl font-semibold text-slate-900 md:text-4xl">{number}</p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-lime-600">
        {label}
      </p>
      {description && <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>}
    </article>
  );
};

export default StatCard;
