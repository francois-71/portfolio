import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./contact.css";
import DOMPurify from "dompurify";

function ContactMe() {
  const { t } = useTranslation();
  function renderError(fieldName) {
    if (serverErrors) {
      if (serverErrors[fieldName]) {
        return <p className="error">{serverErrors[fieldName]}</p>;
      }
    }
    if (errors[fieldName]) {
      return <p className="error">{errors[fieldName]}</p>;
    }
    return null;
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverErrors, setServerErrors] = useState();
  const [sanitizedFormData, setSanitizedFormData] = useState({});
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  useEffect(() => {
    let timer;

    if (isSubmitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Decrease the countdown every second
    }

    if (countdown === 0) {
      window.location.href = "/About"; // Redirect to "About" page after 5 seconds
    }

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [isSubmitted, countdown]);

  const validateForm = () => {
    const newErrors = {};

    // sanitize input, not useful on client side 
    const sanitizer = DOMPurify.sanitize;
    sanitizedFormData.name = sanitizer(formData.name);
    sanitizedFormData.email = sanitizer(formData.email);
    sanitizedFormData.title = sanitizer(formData.title);
    sanitizedFormData.message = sanitizer(formData.message);
    // set sanitized form data
    setSanitizedFormData(sanitizedFormData);

    // check if sanitized input is valid
    if (
      sanitizedFormData.name.length > 150 ||
      sanitizedFormData.name.length === 0
    ) {
      newErrors.name =
        "Name must be 150 characters or less and cannot be empty";
    }
    if (
      sanitizedFormData.email.length > 150 ||
      sanitizedFormData.email.length === 0
    ) {
      newErrors.email =
        "Email must be 150 characters or less and cannot be empty";
    }
    if (
      sanitizedFormData.title.length > 150 ||
      sanitizedFormData.title.length === 0
    ) {
      newErrors.title =
        "Title must be 150 characters or less and cannot be empty";
    }
    if (
      sanitizedFormData.message.length > 1500 ||
      sanitizedFormData.message.length === 0
    ) {
      newErrors.message =
        "Message must be 1500 characters or less and cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedFormData),
        })
          .then((response) => response.json())
          .then((data) => {
            // if error is present, display error message
            if (data.errors) {
              // for each error, set the error message
              const newErrors = {};
              for (const [key, value] of Object.entries(data.errors)) {
                newErrors[key] = value;
              }
              setServerErrors(newErrors);
            } else {
              setIsSubmitted(true);
              // wait 5 seconds and redirect to home
              window.scrollTo(0, 0);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log("An error occurred");
      }
    } else {
      console.log("Invalid form");
    }
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div className="container-success-message">
          <p className="success-message">
            &#x1F4E7; {t("Form-submitted-successfully")} &#x1F4E7;
          </p>
          <p className="success-message ">
            {t("Redirecting")} {countdown}...{" "}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h3 className="form-title">
            {t("Title-contact-page-1")} <br></br> {t("Title-contact-page-2")}
          </h3>

          <div className="form-group">
            <label htmlFor="title" className="label">
              {t("Title")}: *
            </label>
            <input
              placeholder={t("Title-placeholder")}
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="input"
            />
            {renderError("title")}
          </div>
          <div className="form-group">
            <label htmlFor="name" className="label">
              {t("Full-Name")}: *
            </label>
            <input
              placeholder={t("Full-Name-placeholder")}
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input"
            />
            {renderError("name")}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              {t("Email")}: *
            </label>
            <input
              placeholder={t("Email-placeholder")}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input"
            />
            {renderError("email")}
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">
              {t("Message")}: *
            </label>
            <textarea
              placeholder={t("Message-placeholder")}
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="textarea"
            />
            {renderError("message")}
          </div>
          <button type="submit" className="submit-button">
            {t("Submit")}
          </button>
        </form>
      )}
      <span className="contact-note">
        {t("Note")}:&nbsp;{t("No-information-is-stored-on-the-server")}
      </span>
      <div></div>
    </div>
  );
}

export default ContactMe;
