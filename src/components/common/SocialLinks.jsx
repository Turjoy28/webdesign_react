const SocialLinks = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:border-lime-500 hover:text-lime-600"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
