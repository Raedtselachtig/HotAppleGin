export const metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return <main>
    <section className="section legal" style={{ paddingTop: 170 }}>
      <div className="container">
        <h1 className="display section-title">Terms &amp; Conditions</h1>
        <p className="muted legal-date">Last updated: June 2026</p>

        <p className="copy">These terms apply to your use of this website, operated by Hot Apple Gin Family Co., Haarlem, the Netherlands.</p>

        <h2 className="legal-h">Who we are</h2>
        <p className="copy">{'Hot Apple Gin Family Co. · Haarlem, the Netherlands · Chamber of Commerce (KvK): [KvK-nummer] · VAT: [BTW-nummer] · info@hotapplegin.com'}</p>

        <h2 className="legal-h">Age &amp; responsible enjoyment</h2>
        <p className="copy">Hot Apple Gin (the Original) is an alcoholic beverage. This website is intended for people of legal drinking age. Please enjoy responsibly.</p>

        <h2 className="legal-h">Website &amp; content</h2>
        <p className="copy">We aim to keep the information on this site accurate and up to date, but provide it &ldquo;as is&rdquo; without guarantees. The Hot Apple Gin name, logo, photography and content are our property and may not be used without our written permission.</p>

        <h2 className="legal-h">Online sales</h2>
        <p className="copy">Online ordering is not yet available. We are opening our webshop later this year; at that point the full commercial terms &mdash; ordering, prices, payment (handled securely via Stripe), shipping and your right of withdrawal &mdash; will be published here.</p>

        <h2 className="legal-h">Liability, governing law &amp; changes</h2>
        <p className="copy">To the extent permitted by law, our liability for use of this website is limited; nothing here excludes liability that cannot be excluded under Dutch law. These terms are governed by Dutch law. We may update them; the version shown applies while it is published.</p>
      </div>
    </section>
  </main>;
}
