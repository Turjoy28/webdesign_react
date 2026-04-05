const BlogCard = ({ category, date, title, excerpt }) => {
  return (
    <article className="group card-dark overflow-hidden">
      <div className="h-56 bg-gradient-to-br from-lime-100 via-white to-slate-100" />

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          <span>{category}</span>
          <span>{date}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-lime-600">
          {title}
        </h3>

        <p className="text-sm leading-7 text-slate-600">{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogCard;
