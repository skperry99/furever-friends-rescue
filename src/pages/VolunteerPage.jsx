export default function VolunteerPage({ title = "Volunteer with Us" }) {
  return (
    <section className="volunteerPage" aria-labelledby="volunteer-heading">
      <h2 id="volunteer-heading">{title}</h2>

      <p>
        <strong>Unleash your potential:</strong> Furever Friends Rescue is
        seeking human pack members! Do you possess an uncanny ability to
        decipher a cat’s side-eye or a dog’s “I need to go outside in five
        minutes” dance? Do you find joy in the aroma of wet dog and the symphony
        of happy purrs? You might be the purr-fect fit for our team!
      </p>

      <h3>We’re looking for:</h3>
      <ul className="volunteerList">
        <li className="volunteerListItem">
          <strong>Chief Poop Scooper & Kennel Interior Designer:</strong> Keep
          animal apartments spotless. Comfortable with lifting 50+ lbs and
          confined spaces. Bonus if you can make a kennel look five-star.
        </li>
        <li className="volunteerListItem">
          <strong>Feline Fanatic & Purr-fessional Cuddler:</strong> Provide
          endless affection and playtime for fabulous felines. Immune to
          adorable kitten hypnosis.
        </li>
        <li className="volunteerListItem">
          <strong>Dog Whisperer & Treat Dispenser Extraordinaire:</strong> Speak
          fluent “woof” and spot the difference between a playful nip and a
          warning.
        </li>
        <li className="volunteerListItem">
          <strong>Human-Animal Matchmaker & Adoption Facilitator:</strong>{" "}
          Bridge furry friends and forever families with empathy and great
          interviewing skills.
        </li>
      </ul>

      <h3>Ideal candidates will:</h3>
      <p>
        Have a genuine love for animals (obviously), a good sense of humor
        (you’ll need it), and thrive on teamwork—because wrangling a litter of
        puppies solo is not for the faint of heart. Be unbothered by fur, and
        willing to master dog-walking in the rain and strategic cat-napping
        during thunderstorms.
      </p>
    </section>
  );
}
