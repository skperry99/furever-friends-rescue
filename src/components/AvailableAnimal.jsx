import { Link } from "react-router-dom";

export default function AvailableAnimal({ animal }) {
  const { name, image, blurb, slug } = animal;

  return (
    <article className="animalCard">
      <Link
        to={`/adoption/${slug}`}
        className="animalLink"
        aria-label={`Adopt ${name}`}
      >
        <figure style={{ margin: 0, textAlign: "center" }}>
          <img
            className="animalPic"
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <h3 style={{ marginTop: "8px" }}>{name}</h3>
            <p style={{ marginTop: "4px" }}>{blurb}</p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}
