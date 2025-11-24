import AvailableAnimal from "../components/AvailableAnimal";
import { animals } from "../helpers/animals";

export default function AnimalsPage({ title = "Available Animals" }) {
  const hasAnimals = Array.isArray(animals) && animals.length > 0;

  return (
    <section className="animalsLayout" aria-labelledby="animals-heading">
      <h2 id="animals-heading" style={{ width: "100%" }}>
        {title}
      </h2>

      <ul
        className="animals-grid"
        style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}
      >
        {hasAnimals ? (
          animals.map((animal) => (
            <li key={animal.id} style={{ display: "contents" }}>
              <AvailableAnimal animal={animal} />
            </li>
          ))
        ) : (
          <li style={{ width: "100%" }}>
            <p
              role="status"
              aria-live="polite"
              style={{ textAlign: "center", padding: "1rem" }}
            >
              No animals available at the moment.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
}
