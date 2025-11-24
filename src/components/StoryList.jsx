// furever-friends-rescue/src/components/StoryList.jsx

/**
 * Presentational list of adoption stories.
 * The parent page owns the heading and section semantics.
 */
export default function StoryList({
  stories = [],
  emptyMessage = "No stories yet.",
}) {
  const hasStories = Array.isArray(stories) && stories.length > 0;

  if (!hasStories) {
    return (
      <p className="storyList__empty" role="status" aria-live="polite">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="storyList" aria-live="polite">
      {stories.map((story, index) => (
        <li key={index} className="storyList__item">
          {story}
        </li>
      ))}
    </ul>
  );
}
