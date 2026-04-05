const TeamCard = ({ name, role, specialty }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="card-dark p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-xl font-semibold text-white">
        {initials}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-lime-600">
        {role}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{specialty}</p>
    </article>
  );
};

export default TeamCard;
