import { ArrowDownRight, ArrowRight, BarChart3, Bot, Code2, MonitorUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const services = [
  {
    number: '01',
    title: 'Trading Platforms',
    description: 'Trading platform solutions and interfaces that help traders access financial markets. From platform integrations to tailored trading experiences, we build technology around the way you work.',
    detail: 'Trading interfaces · Platform integrations · Market access',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Financial market charts displayed on a professional trading screen',
    icon: MonitorUp,
  },
  {
    number: '02',
    title: 'Automated Trading & Expert Advisors (EA)',
    description: 'Automated trading solutions, Expert Advisors, and trading bots designed to support rule-based strategies and reliable execution workflows.',
    detail: 'Expert Advisors · Algorithmic strategies · Automated execution',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Digital financial chart representing algorithmic trading activity',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Market Analysis & Indicators',
    description: 'Analysis tools that make market information easier to work with, including technical indicators, chart analysis, trading signals, and market data solutions.',
    detail: 'Technical indicators · Chart analysis · Market data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    alt: 'Financial analytics dashboard with charts and market data',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Trading Software Development',
    description: 'Custom trading software and specialized tools developed for traders and businesses, with integrations shaped to fit existing systems and workflows.',
    detail: 'Custom software · Trading tools · Software integrations',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern computer workstations used for software development',
    icon: Code2,
  },
];

export default function TradingTechnology() {
  return (
    <>
      <PageMeta
        title="Trading Technology | Arazyan Technologies"
        description="Explore Arazyan Technologies trading platforms, automated trading and Expert Advisors, market analysis tools, and custom trading software development."
      />
      <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="glow-bg" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Arazyan Technologies · Trading solutions</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-gradient md:text-6xl">Trading Technology</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">Purpose-built technology for traders and businesses navigating financial markets. We create practical platforms, automation, analysis tools, and software to support informed trading workflows.</p>
            <a href="#trading-services" className="primary-button mt-9 w-fit">Explore our services <ArrowDownRight size={17} /></a>
          </div>
          <div className="glass-card group relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=90"
              alt="Professional trading workstation showing financial charts"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Built around your workflow</p>
              <p className="mt-2 text-xl font-semibold text-white">Technology for every step of trading</p>
            </div>
          </div>
        </div>
      </section>

      <section id="trading-services" className="scroll-mt-24 border-y border-white/5 bg-white/[0.018] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">What we build</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Trading technology, tailored to the work</h2>
            <p className="mt-5 leading-7 text-slate-400">Explore our four areas of trading technology expertise, from market access and analysis to automation and custom software.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(({ number, title, description, detail, image, alt, icon: Icon }) => (
              <article key={title} className="glass-card group overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img src={image} alt={alt} loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/65 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#030014]/60 px-3 py-1 text-xs font-semibold tracking-wider text-blue-200 backdrop-blur">{number}</span>
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/15 text-blue-200 backdrop-blur"><Icon size={21} /></div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
                  <p className="mt-5 border-t border-white/5 pt-4 text-xs leading-6 text-slate-500">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl border border-blue-400/10 bg-gradient-to-r from-blue-950/30 to-indigo-950/20 px-6 py-10 md:flex-row md:items-center md:px-10 md:py-12">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Have a trading technology project in mind?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">Tell us about your requirements and explore an approach that fits your trading workflows.</p>
          </div>
          <Link to="/contact" className="primary-button shrink-0">Get in touch <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
