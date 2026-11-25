import { Link } from 'react-router-dom';
import { FolderOpen, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <PageMeta title="Portfolio | Arazyan Technologies" description="Arazyan Technologies' portfolio is being prepared and will feature verified projects as they become available." />
      <section className="px-5 pb-24 pt-40 md:px-8">
        <div className="mx-auto max-w-7xl">
          {projects.length === 0 ? (
            <div className="glass-card mx-auto max-w-4xl rounded-3xl px-6 py-16 text-center md:px-12 md:py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300"><FolderOpen size={30} /></div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Portfolio in preparation</p>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">No published projects yet</h1>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">Arazyan Technologies has not published completed client projects or project screenshots yet. This page is prepared to feature verified work only, and will be updated when real projects are available to share.</p>
              <Link to="/contact" className="primary-button mx-auto mt-8 w-fit">Discuss a project <ArrowRight size={17} /></Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="glass-card overflow-hidden rounded-2xl">
                  {project.image && <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />}
                  <div className="p-6"><p className="text-xs text-blue-400">{project.category}</p><h2 className="mt-2 text-xl font-semibold text-white">{project.title}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p></div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
