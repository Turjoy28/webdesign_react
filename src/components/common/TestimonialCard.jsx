const TestimonialCard = ({ quote, name, role, company }) => {
  return (
    <article className="card-dark h-full p-6">
      <p className="text-lg leading-8 text-slate-800">&quot;{quote}&quot;</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-medium text-slate-900">{name}</p>
        <p className="mt-1 text-sm text-slate-500">
          {role} · {company}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
