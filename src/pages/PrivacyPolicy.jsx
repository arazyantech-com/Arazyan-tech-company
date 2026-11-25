import PageMeta from '../components/PageMeta';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy | Arazyan Technologies" description="Privacy Policy information for the Arazyan Technologies website." />
      <section className="px-5 pb-24 pt-40 md:px-8">
        <article className="prose-dark mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>This editable policy describes how the Arazyan Technologies website may handle information. It should be reviewed and completed with real operational details before public use.</p>
          <h2>Information you provide</h2>
          <p>Information submitted through a contact form should be used only for the purpose for which it was provided and transmitted only through a properly configured, approved service.</p>
          <h2>Analytics</h2>
          <p>Google Analytics 4 should only be enabled after configuring a valid measurement ID and meeting applicable consent requirements.</p>
          <h2>Contact details</h2>
          <p>Questions about this policy can be directed to the privacy contact details once they are provided and verified.</p>
          <p className="text-sm text-slate-500">This draft is not a substitute for legal advice or a finalized compliance process.</p>
        </article>
      </section>
    </>
  );
}
