export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return <main>
    <section className="section legal" style={{ paddingTop: 170 }}>
      <div className="container">
        <h1 className="display section-title">Privacy Policy</h1>
        <p className="muted legal-date">Last updated: June 2026</p>

        <p className="copy">Hot Apple Gin Family Co., based in Haarlem, the Netherlands, respects your privacy and handles personal data in line with the General Data Protection Regulation (GDPR). This policy explains what we collect, why, and the rights you have.</p>

        <h2 className="legal-h">What we collect</h2>
        <p className="copy">We only process the data you choose to give us through a form on this website &mdash; your name, email address and the message or details you submit (for example via the contact form or the waitlist). We do not use cookies, advertising pixels or third-party analytics, and we do not track or build profiles of visitors.</p>

        <h2 className="legal-h">Why we use it &amp; legal basis</h2>
        <p className="copy">We use your data only to reply to you, to let you know when you ask us to (for example when Hot Apple Gin returns), and to handle requests you make. The legal basis is your consent and, where relevant, taking steps at your request.</p>

        <h2 className="legal-h">Storage, sharing &amp; retention</h2>
        <p className="copy">Your data is stored securely with the service providers that host this website and deliver our messages, who process it only on our instructions and within the European Economic Area where possible. We never sell your data. We keep it for up to five years after your last contact with us, after which it is deleted &mdash; or sooner, at your request.</p>

        <h2 className="legal-h">Your rights</h2>
        <p className="copy">Under the GDPR you can ask us to access, correct, erase, restrict, object to or transfer your data. To do so, email info@hotapplegin.com or use our Contact page. You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).</p>

        <h2 className="legal-h">Security &amp; changes</h2>
        <p className="copy">We take reasonable technical and organisational measures to protect your data. We may update this policy; the date above reflects the latest version.</p>
      </div>
    </section>
  </main>;
}
