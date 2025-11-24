import { useParams } from "react-router-dom";
import { getAnimalBySlug } from "../helpers/animals";
import Form from "../components/Form";

export default function AdoptionFormPage() {
  const { animalName: slug } = useParams(); // route param is still named animalName in your routes
  const animal = slug ? getAnimalBySlug(slug) : null;
  const prettyName = animal?.name ?? "";

  return (
    <section className="adoptionPage" aria-labelledby="adoption-heading">
      <h2 id="adoption-heading">
        {prettyName ? `Adopt ${prettyName}` : "Adoption Interest"}
      </h2>
      <Form />
    </section>
  );
}
