export const metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return <main>
    <section className="section legal" style={{ paddingTop: 170 }}>
      <div className="container">
        <h1 className="display section-title">Terms &amp; Conditions</h1>
        <p className="muted legal-date">Last updated: [DATE]</p>

        <p className="copy">These terms apply to your use of this website and, once our webshop opens, to every order placed with Hot Apple Gin Family Co. Please read them before ordering.</p>

        <h2 className="legal-h">Who we are</h2>
        <p className="copy">{'Hot Apple Gin Family Co. · Haarlem, the Netherlands · Chamber of Commerce (KvK): [KVK NUMBER] · VAT: [VAT NUMBER] · [CONTACT EMAIL]'}</p>

        <h2 className="legal-h">Age &amp; responsible enjoyment</h2>
        <p className="copy">Hot Apple Gin (the Original) is an alcoholic beverage. You must be of legal drinking age in your country to order or receive it. We sell only to, and deliver only to, people aged 18 or over. Please enjoy responsibly.</p>

        <h2 className="legal-h">Products &amp; availability</h2>
        <p className="copy">Hot Apple Gin is a seasonal product and stock is limited. We describe our products as accurately as we can; minor differences in packaging or appearance may occur. Prices are shown in euros and include VAT where applicable.</p>

        <h2 className="legal-h">Orders &amp; payment</h2>
        <p className="copy">When the webshop is live, an order is complete once you have confirmed it and payment has been received. We may decline or cancel an order (for example if a product is out of stock or age cannot be confirmed) and will refund any amount already paid. [CONFIRM: accepted payment methods &mdash; e.g. iDEAL, credit card, Apple Pay, Google Pay.]</p>

        <h2 className="legal-h">Shipping</h2>
        <p className="copy">At launch we ship to the Netherlands, Belgium and Germany. Shipping costs and estimated delivery times are shown at checkout. [CONFIRM: carrier and any free-shipping threshold.]</p>

        <h2 className="legal-h">Right of withdrawal &amp; returns</h2>
        <p className="copy">As a consumer in the EU you generally have 14 days to withdraw from your purchase. For reasons of hygiene and safety, sealed beverages that have been opened cannot be returned. If an order arrives damaged or incorrect, contact us with your order details and a photo and we will make it right. [CONFIRM: returns address &amp; process.]</p>

        <h2 className="legal-h">Liability</h2>
        <p className="copy">We take care to deliver our products in good condition, but to the extent permitted by law our liability is limited to the value of your order. Nothing in these terms limits liability that cannot be excluded under Dutch law.</p>

        <h2 className="legal-h">Intellectual property</h2>
        <p className="copy">The Hot Apple Gin name, logo, photography and website content are our property and may not be used without our written permission.</p>

        <h2 className="legal-h">Governing law &amp; changes</h2>
        <p className="copy">These terms are governed by Dutch law. We may update them; the version shown applies to orders placed while it is published.</p>
      </div>
    </section>
  </main>;
}
