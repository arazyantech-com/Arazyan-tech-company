import { useState } from 'react';
import { Send } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { contactDetails } from '../data/contactDetails';

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '', consent: false });
  const [errors, setErrors] = useState({});
  const [validationComplete, setValidationComplete] = useState(false);

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.message.trim()) next.message = 'Please enter a message.';
    if (!values.consent) next.consent = 'Please agree to the Terms and Conditions and acknowledge the Privacy Policy.';
    return next;
  };

  const submit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setValidationComplete(true);
  };

  return (
    <>
      <PageMeta title="Contact Arazyan Technologies" description="Contact Arazyan Technologies to discuss digital and software requirements." />
      <section className="px-5 pb-24 pt-40 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Start a conversation</h1>
            <p className="mt-6 leading-8 text-slate-400">Share a project idea or technology challenge. This form is prepared for a real submission backend and will not claim to send anything until that connection is configured.</p>
            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <p><span className="text-slate-200">Email:</span> {contactDetails.email || 'Placeholder — to be added'}</p>
              <p><span className="text-slate-200">Phone:</span> {contactDetails.phone || 'Placeholder — to be added'}</p>
              <p><span className="text-slate-200">Location:</span> {contactDetails.location || 'Placeholder — to be added'}</p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8">
            {validationComplete && (
              <p role="status" className="mb-5 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">
                Form validation passed, but no submission was sent because a backend or email service is not connected.
              </p>
            )}
              <form onSubmit={submit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input id="name" name="name" value={values.name} onChange={update} className="form-input" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                    {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input id="phone" name="phone" type="tel" value={values.phone} onChange={update} className="form-input" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
                    {errors.phone && <p id="phone-error" className="form-error">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input id="email" name="email" type="email" value={values.email} onChange={update} className="form-input" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows="6" value={values.message} onChange={update} className="form-input resize-y" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
                  {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
                </div>
                <div className="mt-5">
                  <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                    <input name="consent" type="checkbox" checked={values.consent} onChange={update} className="mt-1 h-4 w-4 rounded border-white/20 accent-blue-600" aria-invalid={!!errors.consent} />
                    <span>I agree to the Terms and Conditions and acknowledge the Privacy Policy.</span>
                  </label>
                  {errors.consent && <p className="form-error">{errors.consent}</p>}
                </div>
                <button type="submit" className="primary-button mt-7 w-full sm:w-auto">Submit <Send size={17} /></button>
              </form>
          </div>
        </div>
      </section>
    </>
  );
}
