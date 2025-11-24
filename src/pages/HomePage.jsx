import homePic from "../assets/images/home.jpg";

export default function HomePage({
  title = "Welcome to Furever Friends Rescue",
}) {
  return (
    <section className="homePage" aria-labelledby="home-heading">
      <h2 id="home-heading">{title}</h2>
      <div className="pageContent">
        <figure className="homeHero">
          <img
            src={homePic}
            alt="Shelter staff smiling with adoptable pets"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Meet our team and residents</figcaption>
        </figure>

        <p className="homeText">
          This is a quirky, slightly chaotic, yet undeniably loving haven for
          furry, scaly, and feathered friends.
        </p>
      </div>
    </section>
  );
}
