import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Form() {
  const { animalName } = useParams();
  const initialName = animalName ? decodeURIComponent(animalName) : "";

  const [animalNameForm, setAnimalNameForm] = useState(initialName);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const isAdoptMode = Boolean(animalName); // page route decides mode

  useEffect(() => {
    setAnimalNameForm(initialName);
  }, [initialName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = isAdoptMode
      ? `Thank you for your interest in adopting ${
          animalNameForm || "this pet"
        }! We will contact you soon.`
      : "Thank you! We will contact you soon.";

    // (If you later post to an API, do it here.)

    // Reset fields (keep animal name filled in adopt mode)
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    if (!isAdoptMode) setAnimalNameForm("");

    setSubmitMessage(message);
    setShowMessage(true);
  };

  return (
    <div className="formContainer">
      <form id="form" onSubmit={handleSubmit} noValidate>
        {/* Animal field (only visible for adopt mode) */}
        {isAdoptMode && (
          <div>
            <label htmlFor="animalName">Animal Name</label>
            <input
              type="text"
              id="animalName"
              name="animalName"
              value={animalNameForm}
              onChange={(e) => setAnimalNameForm(e.target.value)}
              autoComplete="off"
            />
          </div>
        )}

        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name..."
            required
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name..."
            required
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address..."
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        {/* Contact message is only relevant when not adopting via route */}
        {!isAdoptMode && (
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {showMessage && (
        <p
          className="submitResponse"
          role="alert"
          style={{ marginTop: "12px", textAlign: "center" }}
        >
          {submitMessage}
        </p>
      )}
    </div>
  );
}
