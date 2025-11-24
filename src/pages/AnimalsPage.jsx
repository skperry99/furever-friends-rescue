import AvailableAnimal from "../components/AvailableAnimal";
import { animals } from "../helpers/animals";

export default function AnimalsPage({ title = "Available Animals" }) {
  const hasAnimals = Array.isArray(animals) && animals.length > 0;

  return (
    <section className="animalsLayout" aria-labelledby="animals-heading">
      {/* Page intro wrapper for heading / any future copy */}
      <div className="pageContent">
        <h2 id="animals-heading">{title}</h2>
      </div>

      <ul className="animals-grid" aria-label="Available animals">
        {hasAnimals ? (
          animals.map((animal) => (
            <li key={animal.id}>
              <AvailableAnimal animal={animal} />
            </li>
          ))
        ) : (
          <li className="animals-grid__empty">
            <p role="status" aria-live="polite">
              No animals available at the moment.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
}
