import { Link } from 'react-router-dom';
import { Facebook, Github, Instagram, Linkedin, Music2 } from 'lucide-react';
import Logo from './Logo';
import { services } from '../data/services';
import { socialLinks } from '../data/socialLinks';
import { contactDetails } from '../data/contactDetails';

const socialIcons = { Facebook, Instagram, TikTok: Music2, LinkedIn: Linkedin, GitHub: Github };

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#010008]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" aria-label="Arazyan Technologies home"><Logo /></Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">Arazyan Technologies provides digital and software-related solutions with a focus on professionalism, reliability, and thoughtful engineering.</p>
        </div>
        <div>
          <h2 className="footer-heading">Navigation</h2>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li><li><Link to="/about">About</Link></li><li><Link to="/portfolio">Portfolio</Link></li><li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Services</h2>
          <ul className="footer-list">
            {services.map((service) => <li key={service.title}><Link to="/about">{service.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-list">
            <li>{contactDetails.email || 'Email: To be added'}</li>
            <li>{contactDetails.phone || 'Phone: To be added'}</li>
            <li>{contactDetails.location || 'Location: To be added'}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.filter((item) => item.url).map((item) => {
              const Icon = socialIcons[item.name];
              return <a key={item.name} href={item.url} target="_blank" rel="noreferrer" aria-label={item.name} className="text-slate-500 hover:text-white">{Icon && <Icon size={18} />}</a>;
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.04] px-5 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Arazyan Technologies. All Rights Reserved.</p>
        <div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-slate-300">Terms and Conditions</Link></div>
      </div>
    </footer>
  );
}
