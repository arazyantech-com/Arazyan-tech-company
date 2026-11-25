export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-2xl' : 'mx-auto max-w-2xl text-center'}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-relaxed text-slate-400">{description}</p>}
    </div>
  );
}
