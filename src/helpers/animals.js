import gp from "../assets/images/guinea-pig.jpg";
import gp2 from "../assets/images/guinea-pig-2.jpg";
import goat from "../assets/images/goat.jpg";
import snake from "../assets/images/snake.png";
import cat1 from "../assets/images/cat1.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import dog from "../assets/images/dog.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.png";
import dog4 from "../assets/images/dog4.jpg";
import dog5 from "../assets/images/dog5.jpg";

const makeSlug = (name = "") =>
  encodeURIComponent(name.trim().toLowerCase().replace(/\s+/g, "-"));

export const animals = Object.freeze([
  {
    id: 1,
    name: "Ralphie",
    slug: makeSlug("Ralphie"),
    type: "other",
    image: gp2,
    blurb:
      `The "Fire-Breathing Demon": Ralphie is a terror in a somewhat small package. ` +
      `He may be a "whole jerk," but he's our jerk, and we believe in him.`,
  },
  {
    id: 2,
    name: "Eddie the Terrible",
    slug: makeSlug("Eddie the Terrible"),
    type: "other",
    image: gp,
    blurb:
      `He's cute, fluffy, and a "little bit tubby," but don't be fooled. ` +
      `Eddie is socially awkward and has specific sleeping demands that involve absolutely no crates.`,
  },
  {
    id: 3,
    name: "Billy",
    slug: makeSlug("Billy"),
    type: "other",
    image: goat,
    blurb:
      `This little escape artist is tired of boring fences. Offer a forever home with exciting ` +
      `challenges and a well-stocked snack bar, and you'll have a friend for life!`,
  },
  {
    id: 4,
    name: "Fluffy",
    slug: makeSlug("Fluffy"),
    type: "other",
    image: snake,
    blurb:
      `Forget the stereotypes; this slithery friend just wants to wrap you in a warm embrace (literally!). ` +
      `Plus, think of the money you'll save on dog walkers!`,
  },
  {
    id: 5,
    name: "Astro",
    slug: makeSlug("Astro"),
    type: "dog",
    image: dog3,
    blurb:
      `This is Astro, a professional food critic and part-time cuddler. He has a discerning palate ` +
      `when it comes to kibble, but will settle for anything remotely edible. Also, he dreams of ` +
      `squirrels and has mastered the art of the puppy-dog eyes.`,
  },
  {
    id: 6,
    name: "Stitch",
    slug: makeSlug("Stitch"),
    type: "dog",
    image: dog4,
    blurb:
      `Meet Stitch, a furry vacuum cleaner with a PhD in counter-surfing. He's a master of disguise ` +
      `(when it comes to hiding his treats) and has a talent for turning socks into chew toys. Proceed ` +
      `with caution (and extra treats).`,
  },
  {
    id: 7,
    name: "Pluto",
    slug: makeSlug("Pluto"),
    type: "dog",
    image: dog,
    blurb:
      `Warning: Pluto may spontaneously combust into zoomies at any given moment. He's a professional ` +
      `napper, a connoisseur of belly rubs, and believes all shoes are rightfully his. Proceed with a ` +
      `sense of humor.`,
  },
  {
    id: 8,
    name: "Brian",
    slug: makeSlug("Brian"),
    type: "dog",
    image: dog2,
    blurb:
      `If there were an Olympic sport for snoring, Brian would be a gold medalist. This pup also enjoys ` +
      `long walks on the beach (followed by a nap in the sun), and is always up for a game of fetch... with himself.`,
  },
  {
    id: 9,
    name: "Dug",
    slug: makeSlug("Dug"),
    type: "dog",
    image: dog5,
    blurb:
      `This is Dug, a professional beggar with a heart of gold (and a stomach of steel). He's a master ` +
      `of the "sad eyes" technique, and can sniff out cheese from a mile away. Proceed with caution, ` +
      `and hide the snacks!`,
  },
  {
    id: 10,
    name: "Garfield",
    slug: makeSlug("Garfield"),
    type: "cat",
    image: cat3,
    blurb: `I believe in living life to the fullest, which for me means eating, sleeping, and occasionally batting at dangling string.`,
  },
  {
    id: 11,
    name: "Lucifer",
    slug: makeSlug("Lucifer"),
    type: "cat",
    image: cat4,
    blurb:
      `My hobbies include judging your life choices and napping in sunbeams. I'm also very good at making ` +
      `you feel guilty when I don't get enough treats.`,
  },
  {
    id: 12,
    name: "Oliver",
    slug: makeSlug("Oliver"),
    type: "cat",
    image: cat1,
    blurb: `I'm a tiny, furry tornado of mischief and naps. Proceed with caution... and treats.`,
  },
]);

export const animalsByType = Object.freeze(
  animals.reduce((acc, a) => {
    (acc[a.type] ??= []).push(a);
    return acc;
  }, /** @type {Record<string, typeof animals>} */ ({}))
);

export const getAnimalBySlug = (slug) => animals.find((a) => a.slug === slug);
