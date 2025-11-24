export default function CareersPage({
  title = "Join the Circus (of Cuddles and Chaos) at Furever Friends Rescue!",
}) {
  return (
    <section className="careersPage" aria-labelledby="careers-heading">
      <h2 id="careers-heading">{title}</h2>
      <h3>Benefits include unlimited puppy breath and gratuitous purrs.</h3>

      <ul className="careersList">
        <li className="careersListItem">
          <strong>Master of the Crate Escape:</strong> Ensure the timely and
          safe departure of residents (into loving homes, of course!).
        </li>
        <li className="careersListItem">
          <strong>Negotiator of Nuzzles:</strong> Facilitate harmonious
          interactions between residents—some have strong personalities.
        </li>
        <li className="careersListItem">
          <strong>Professional Belly Rubber:</strong> On standby for immediate
          tummy rubs and chin scratches, as requested by residents.
        </li>
        <li className="careersListItem">
          <strong>Feast Facilitator:</strong> Serve delicious meals (and
          occasionally intercept questionable snacks smuggled by the cunning).
        </li>
        <li className="careersListItem">
          <strong>Environmental Enrichment Expert:</strong> Provide stimulating
          play, cozy spaces, and plenty of squeaky toys.
        </li>
        <li className="careersListItem">
          <strong>Chief Litter Box Landscaper (Feline Division):</strong>{" "}
          Maintain pristine accommodations for discerning cats.
        </li>
        <li className="careersListItem">
          <strong>Emotional Support Human:</strong> Be a beacon of comfort for
          both residents and the occasional overwhelmed volunteer.
        </li>
      </ul>

      <h3>The purr-fect candidate will possess:</h3>
      <ul className="careersList">
        <li className="careersListItem">
          An unwavering love for animals (even those who think personal space is
          a myth).
        </li>
        <li className="careersListItem">
          A strong bladder and an even stronger stomach (it’s a shelter, after
          all).
        </li>
        <li className="careersListItem">
          A keen eye for a great adoption photo op (bonus points for props and
          costumes).
        </li>
        <li className="careersListItem">
          Excellent communication skills (especially when mediating
          chihuahua–Siamese debates).
        </li>
        <li className="careersListItem">
          A desire to make a real difference—one wagging tail or contented purr
          at a time.
        </li>
      </ul>

      <p>
        Ready for a job where every day is an adventure and colleagues have fur
        and four legs? Send a resume (and a short story about your most
        memorable animal encounter) to{" "}
        <a href="mailto:woof@bark.org">woof@bark.org</a>. We’re excited to meet
        you— and so are the residents!
      </p>
    </section>
  );
}
