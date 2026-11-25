import { UserRound } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CounterAnimation from '../components/CounterAnimation';
import { services } from '../data/services';
import { statistics } from '../data/statistics';

export default function About() {
  return (
    <>
      <PageMeta title="About Arazyan Technologies" description="Learn about Arazyan Technologies, its mission, vision, core values, approach, services, and company profile." />
      <section className="px-5 pb-20 pt-40 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="About us" title="A technology company built on clear thinking and useful solutions" description="Arazyan Technologies is a technology company providing digital and software-related solutions for organizations and ideas that need dependable technical execution." />
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.018] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ['Who we are', 'A technology team focused on accessible, maintainable digital solutions and thoughtful problem solving.'],
            ['Our mission', 'To turn real requirements into reliable software while keeping quality, clarity, and trust at the center of our work.'],
            ['Our vision', 'To become a dependable technology partner for organizations seeking practical innovation and sustainable digital growth.'],
          ].map(([title, text]) => <article key={title} className="glass-card rounded-2xl p-7"><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-400">{text}</p></article>)}
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="What we stand for" title="Core values" />
            <div className="mt-8 space-y-4">{['Honesty in claims and communication', 'Quality in planning and execution', 'Security and privacy awareness', 'Responsibility and continuous improvement'].map((value) => <div key={value} className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-slate-300">{value}</div>)}</div>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="The challenge" title="Problems we solve" />
            <p className="mt-8 leading-8 text-slate-400">We help address fragmented digital operations, legacy or manually managed processes, needs for secure modern interfaces, and ideas that require structured software planning. We aim to serve startups, organizations, public-facing teams, and individuals looking for a clear technology approach.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.018] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our workflow" title="How we approach a project" description="A transparent, iterative process helps keep decisions understandable and work focused." />
          <div className="mt-12 grid gap-5 md:grid-cols-4">{[
            ['01', 'Discover', 'Understand the problem, users, constraints, and desired outcomes.'],
            ['02', 'Plan', 'Define scope, priorities, technical direction, and measurable next steps.'],
            ['03', 'Build', 'Develop and validate in clear stages with maintainability in mind.'],
            ['04', 'Improve', 'Review, refine, document, and prepare for future growth.'],
          ].map(([number, title, text]) => <article key={title} className="glass-card rounded-2xl p-6"><span className="text-xs font-semibold text-blue-400">{number}</span><h3 className="mt-4 font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Services" title="Capabilities" description="Our service areas are editable and will grow as verified capabilities and real experience expand." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.018] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Company profile" title="Arazyan at a glance" />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">{statistics.map((item) => <div key={item.label} className="glass-card rounded-2xl p-6 text-center"><p className="text-3xl font-bold text-white"><CounterAnimation value={item.value} prefix={item.prefix} suffix={item.suffix} /></p><p className="mt-3 text-xs leading-5 text-slate-400">{item.label}</p></div>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex aspect-square items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] text-slate-600"><div className="text-center"><UserRound className="mx-auto" size={54} /><p className="mt-3 text-xs">Founder photo placeholder</p></div></div>
          <div className="flex flex-col justify-center"><SectionTitle align="left" eyebrow="Leadership" title="Founder / CEO profile" /><p className="mt-6 leading-8 text-slate-400">Founder and CEO information is intentionally not published until it is provided and verified. This profile area is ready for a real name, photograph, and concise biography. No personal background or experience is assumed.</p></div>
        </div>
      </section>

      <section className="border-t border-white/5 px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Team</p><h2 className="mt-3 text-2xl font-bold text-white">Team profiles will be added when available</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">We are keeping this section intentionally unpopulated rather than inventing employee names, roles, or biographies.</p></div>
      </section>
    </>
  );
}
