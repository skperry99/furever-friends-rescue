import { useState } from "react";

export default function StoryForm({ onSubmit }) {
  const [storyText, setStoryText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = storyText.trim(); // ✅ call trim()
    if (!value) return; // guard against empty strings
    onSubmit(value);
    setStoryText("");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="storyText"
          style={{ display: "block", marginBottom: 6 }}
        >
          Share your adoption story
        </label>
        <textarea
          id="storyText"
          name="storyText"
          rows={5}
          placeholder="Tell us your pet adoption story..."
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          maxLength={800} // optional: light guard
        />
        <button type="submit" style={{ marginTop: 8 }}>
          Submit
        </button>
      </form>
    </div>
  );
}
