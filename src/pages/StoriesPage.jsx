// furever-friends-rescue/src/pages/StoriesPage.jsx
import { useState } from "react";
import StoryForm from "../components/StoryForm.jsx";
import StoryList from "../components/StoryList.jsx";

const INITIAL_STORIES = [
  "Chrissy was an amazing cat! — Tyler",
  "Taz is a sweetheart! — Denise",
];

export default function StoriesPage() {
  const [stories, setStories] = useState(INITIAL_STORIES);

  const handleNewStory = (newStory) => {
    const trimmed = newStory.trim();
    if (!trimmed) return; // ignore empty submissions just in case

    // newest first feels nicer
    setStories((prev) => [trimmed, ...prev]);
  };

  return (
    <section className="storiesPage" aria-labelledby="stories-heading">
      <h2 id="stories-heading" className="storiesPage__title">
        Adoption Stories
      </h2>

      <StoryList
        stories={stories}
        emptyMessage="No adoption stories yet — be the first to share your happy tail!"
      />

      <StoryForm onSubmit={handleNewStory} />
    </section>
  );
}
