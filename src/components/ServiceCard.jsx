import { Blocks, Cloud, Cpu, Code2, ShieldCheck, Smartphone, Terminal } from 'lucide-react';

const icons = { code: Code2, shield: ShieldCheck, cloud: Cloud, smartphone: Smartphone, cpu: Cpu, blocks: Blocks, terminal: Terminal };

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Code2;
  return (
    <article className="glass-card rounded-2xl p-6">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
    </article>
  );
}
