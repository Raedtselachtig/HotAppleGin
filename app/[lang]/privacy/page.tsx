export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return <main>
    <section className="section legal" style={{ paddingTop: 170 }}>
      <div className="container">
        <h1 className="display section-title">Privacy Policy</h1>
        <p className="muted legal-date">Last updated: [DATE]</p>

        <p className="copy">Hot Apple Gin Family Co. (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is based in Haarlem, the Netherlands. We respect your privacy and handle personal data in line with the General Data Protection Regulation (GDPR). This policy explains what we collect, why, and the rights you have.</p>

        <h2 className="legal-h">What we collect</h2>
        <p className="copy">We only process the data you choose to give us through a form on this website &mdash; your name, email address and the message or details you submit (for example via the contact form or the waitlist). We do not use tracking cookies, advertising pixels or third-party analytics, and we do not build profiles of visitors.</p>

        <h2 className="legal-h">Why we use it &amp; legal basis</h2>
        <p className="copy">We use your data solely to respond to your message, to keep you informed when you ask us to (for example to tell you when Hot Apple Gin returns), and to handle any request you make. The legal basis is your consent, and &mdash; where relevant &mdash; taking steps at your request before entering into an agreement.</p>

        <h2 className="legal-h">Storage &amp; retention</h2>
        <p className="copy">Your data is stored securely with our hosting and email providers within the European Economic Area where possible. We keep it only as long as needed for the purpose above, after which it is deleted. [CONFIRM: retention period, e.g. waitlist data until you unsubscribe; contact messages up to 24 months.]</p>

        <h2 className="legal-h">Sharing</h2>
        <p className="copy">We never sell your data. We share it only with the service providers that help us operate this site and our communications (such as our hosting and email partners), who process it on our instructions. [CONFIRM: named processors, e.g. Vercel (hosting), Resend (email).]</p>

        <h2 className="legal-h">Your rights</h2>
        <p className="copy">{'Under the GDPR you can request access to your data, correction, erasure, restriction, objection, and data portability. To exercise any of these, email us at [PRIVACY EMAIL]. You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).'}</p>

        <h2 className="legal-h">Security &amp; changes</h2>
        <p className="copy">We take reasonable technical and organisational measures to protect your data. We may update this policy; the date above reflects the latest version.</p>

        <h2 className="legal-h">Contact</h2>
        <p className="copy">{'Hot Apple Gin Family Co. · Haarlem, the Netherlands · [PRIVACY EMAIL]'}</p>
      </div>
    </section>
  </main>;
}
