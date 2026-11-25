import PageMeta from '../components/PageMeta';

export default function TermsAndConditions() {
  return (
    <>
      <PageMeta title="Terms and Conditions | Arazyan Technologies" description="Terms and Conditions for the Arazyan Technologies website." />
      <section className="px-5 pb-24 pt-40 md:px-8">
        <article className="prose-dark mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1>Terms and Conditions</h1>
          <p>This editable terms page should be reviewed and completed with the company's final commercial, intellectual property, liability, and governing-law terms.</p>
          <h2>Website use</h2>
          <p>You may use this website for lawful informational purposes. Content is provided without a guarantee that it is suitable for every purpose.</p>
          <h2>Professional engagements</h2>
          <p>Any software or consulting engagement should be governed by the specific written agreement that applies to that engagement.</p>
          <h2>Changes</h2>
          <p>These terms may be updated as the company and website services develop.</p>
          <p className="text-sm text-slate-500">This draft is not a substitute for legal advice or a finalized agreement.</p>
        </article>
      </section>
    </>
  );
}
