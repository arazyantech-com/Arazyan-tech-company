import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/trading-technology', label: 'Trading Technology' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    document.body.classList.add('overflow-hidden');
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/5 bg-bg/90 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Arazyan Technologies home" className="relative z-[60]"><Logo /></Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 md:block">Get in touch</Link>
        <button ref={menuRef} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="relative z-[60] rounded-lg p-2 text-white md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" className={`fixed inset-0 z-50 flex flex-col bg-bg/98 px-6 pt-28 transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation" className="space-y-2">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `block border-b border-white/5 py-4 text-xl ${isActive ? 'text-white' : 'text-slate-400'}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-blue-500">Get in touch</Link>
        </nav>
      </div>
    </header>
  );
}
