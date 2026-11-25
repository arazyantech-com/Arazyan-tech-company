import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Home() {
  return (
    <>
      <PageMeta title="Arazyan Technologies | Digital and Software Solutions" description="Arazyan Technologies provides professional digital and software solutions, including software development, cybersecurity, cloud, mobile, AI, blockchain, and IT consulting." />
      <section className="relative overflow-hidden px-5 pb-24 pt-40 md:px-8 md:pt-48">
        <div className="glow-bg" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">Arazyan Technologies</p>
          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight text-gradient md:text-7xl">Building thoughtful software for a changing world</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">Arazyan Technologies develops digital and software solutions with clarity, security, reliability, and an approach designed to grow alongside real business needs.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/about" className="primary-button">Discover Arazyan <ArrowRight size={17} /></Link>
            <Link to="/portfolio" className="secondary-button">View portfolio</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.018] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our capabilities" title="Technology services built around clear needs" description="Explore the areas in which Arazyan Technologies can support digital products and technology initiatives." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.title} service={service} />)}</div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Our approach" title="Why Choose Arazyan Technologies?" description="We bring a measured, transparent approach to technology work. The focus is on understanding the problem, choosing appropriate tools, maintaining quality, and communicating clearly throughout delivery." />
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-400" size={18} /> Practical solutions grounded in project requirements</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-blue-400" size={18} /> Security and maintainability considered from the start</li>
              <li className="flex gap-3"><Zap className="mt-0.5 shrink-0 text-blue-400" size={18} /> Clear communication and a flexible, learning mindset</li>
            </ul>
          </div>
          <div className="glass-card min-h-72 rounded-3xl p-8 md:p-10">
            <div className="grid h-full place-items-center text-center">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300"><ShieldCheck size={30} /></div>
                <p className="mt-6 text-xl font-semibold text-white">Purpose before complexity</p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">Every engagement starts with the real problem to solve, then applies technology carefully rather than unnecessarily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-blue-400/10 bg-gradient-to-r from-blue-950/30 to-indigo-950/20 px-6 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Let’s discuss what you need to build</h2>
          <p className="mt-4 text-slate-400">Start a conversation about an idea, requirement, or technology challenge.</p>
          <Link to="/contact" className="primary-button mx-auto mt-8 w-fit">Contact Arazyan <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
