import shelter from "../assets/images/shelter.jpg";
import Form from "../components/Form";

export default function ContactPage({ title = "Contact Us" }) {
  return (
    <section className="contactPage" aria-labelledby="contact-heading">
      <div className="pageContent">
        <h2 id="contact-heading">{title}</h2>

        <div className="contactLayout">
          <figure className="contactMedia">
            <img
              src={shelter}
              alt="Exterior of Furever Friends Rescue"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="logistics">
            <address>
              <strong>Address</strong>
              <br />
              999 Doggone-It Street
              <br />
              Anytown, NE 90210
            </address>

            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:5558675309">555-867-5309</a>
            </p>

            <p>
              <strong>Hours</strong>
              <br />
              Mon–Fri: 12–6 p.m.
              <br />
              Sat: 10 a.m.–5 p.m.
              <br />
              Sun: 12–4 p.m.
            </p>
          </div>
        </div>

        {/* Contact mode: Form shows message textarea when not adopting via route */}
        <Form />
      </div>
    </section>
  );
}
