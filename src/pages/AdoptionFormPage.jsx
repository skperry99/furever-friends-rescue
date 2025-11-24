import { useParams } from "react-router-dom";
import { getAnimalBySlug } from "../helpers/animals";
import Form from "../components/Form";

export default function AdoptionFormPage() {
  const { animalName: slug } = useParams();
  const animal = slug ? getAnimalBySlug(slug) : null;
  const prettyName = animal?.name ?? "";

  return (
    <section className="adoptionPage" aria-labelledby="adoption-heading">
      <h2 id="adoption-heading">
        {prettyName ? `Adopt ${prettyName}` : "Adoption Interest"}
      </h2>

      <div className="adoptionLayout">
        {animal && (
          <article
            className="adoptionDetails"
            aria-label={`${prettyName} details`}
          >
            <img
              src={animal.image}
              alt={prettyName}
              className="adoptionDetails__image"
              loading="lazy"
              decoding="async"
            />
            <h3 className="adoptionDetails__name">{prettyName}</h3>
            <p className="adoptionDetails__story">{animal.blurb}</p>
          </article>
        )}

        <div className="adoptionFormWrapper">
          {/* pass the nice name so the form is prefilled */}
          <Form selectedAnimalName={prettyName} />
        </div>
      </div>
    </section>
  );
}
