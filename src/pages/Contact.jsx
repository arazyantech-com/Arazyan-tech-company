import { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { contactDetails } from '../data/contactDetails';
import { services } from '../data/services';

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '', service: '', consent: false });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitting = useRef(false);

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
    if (!values.service) next.service = 'Please select a service.';
    if (!values.consent) next.consent = 'Please agree to the Terms and Conditions and acknowledge the Privacy Policy.';
    return next;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    submitting.current = true;
    setIsSubmitting(true);
    setResult(null);
    try {
      const formData = new FormData(event.currentTarget);
      formData.append('access_key', 'f9a04cf6-f086-4eed-8dd5-8d8b6f24213d');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok || !data?.success) {
        throw new Error(typeof data?.message === 'string' ? data.message : 'Your message could not be sent. Please try again.');
      }
      setResult({
        type: 'success',
        message: "Thank you for reaching out. Your message has been sent successfully. We'll be in touch soon.",
      });
      setValues({ name: '', phone: '', email: '', message: '', service: '', consent: false });
    } catch (error) {
      setResult({
        type: 'error',
        message: error instanceof Error && error.name === 'Error'
          ? error.message
          : 'We could not send your message. Please check your connection and try again.',
      });
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta title="Contact Arazyan Technologies" description="Contact Arazyan Technologies to discuss digital and software requirements." />
      <section className="px-5 pb-24 pt-40 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Start a conversation</h1>
            <p className="mt-6 leading-8 text-slate-400">Share a project idea or technology challenge.</p>
            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <p><span className="text-slate-200">Email:</span> {contactDetails.email || 'Placeholder — to be added'}</p>
              <p><span className="text-slate-200">Phone:</span> {contactDetails.phone || 'Placeholder — to be added'}</p>
              <p><span className="text-slate-200">Location:</span> {contactDetails.location || 'Placeholder — to be added'}</p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8">
            {result && (
              <p
                role={result.type === 'error' ? 'alert' : 'status'}
                className={`mb-5 rounded-xl border px-4 py-3 text-sm ${
                  result.type === 'success'
                    ? 'border-emerald-400/20 bg-emerald-400/5 text-emerald-200'
                    : 'border-red-400/20 bg-red-400/5 text-red-200'
                }`}
              >
                {result.message}
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
                  <label htmlFor="message" className="form-label">Project Description</label>
                  <textarea id="message" name="message" rows="6" value={values.message} onChange={update} className="form-input resize-y" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
                  {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
                </div>
                <div className="mt-5">
                  <label htmlFor="service" className="form-label">What service are you interested in?</label>
                  <select id="service" name="service" required value={values.service} onChange={update} className="form-input" aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-error' : undefined}>
                    <option value="">Select a service</option>
                    {services.map(({ title }) => <option key={title} value={title}>{title}</option>)}
                  </select>
                  {errors.service && <p id="service-error" className="form-error">{errors.service}</p>}
                </div>
                <div className="mt-5">
                  <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                    <input name="consent" type="checkbox" value="Agreed" required checked={values.consent} onChange={update} className="mt-1 h-4 w-4 rounded border-white/20 accent-blue-600" aria-invalid={!!errors.consent} />
                    <span>
                      I agree to the <Link to="/terms-and-conditions" className="text-blue-300 underline underline-offset-2">Terms and Conditions</Link> and <Link to="/privacy-policy" className="text-blue-300 underline underline-offset-2">Privacy Policy</Link> of Arazyan Technologies.
                    </span>
                  </label>
                  {errors.consent && <p className="form-error">{errors.consent}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="primary-button mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                  {isSubmitting ? 'Sending...' : 'Submit'} <Send size={17} />
                </button>
              </form>
          </div>
        </div>
      </section>
    </>
  );
}
