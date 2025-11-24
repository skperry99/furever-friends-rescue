import shelter2 from "../assets/images/shelter2.jpg";

export default function AboutPage({ title = "About Us" }) {
  return (
    <section className="aboutPage" aria-labelledby="about-heading">
      <div className="aboutMedia">
        <img
          src={shelter2}
          alt="Exterior of Furever Friends Rescue"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="aboutText">
        <h2 id="about-heading">{title}</h2>

        <p>
          The shelter is home to a delightful mix of personalities. There’s the
          “energetic enthusiast” who can outrun a cheetah, the “lap-loving
          legend” who thinks a bed in your room is awesome—but sleeping in the
          bed with you is better—and the “mystery meowser” whose purrs are as
          enchanting as they are puzzling. Special residents include Ralphie the
          “Fire-Breathing Demon” (a handful, but our handful) and Eddie the
          Terrible—cute, fluffy, a little tubby, socially awkward, and strongly
          anti-crate.
        </p>

        <p>
          Our mission is simple: connect unique residents with equally unique
          humans. We focus on perfect matches—even if it means a few “symphonies
          of protest” from Eddie. If you’re ready for a companion who will keep
          you entertained, occasionally challenge your sanity, and always offer
          love, you’ve come to the right place. Visit Furever Friends Rescue and
          find your purr-fectly imperfect match!
        </p>
      </div>
    </section>
  );
}
