import React, { useState } from "react";
import "./languageselector.css";
import i18n from "../../i18n";

const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);

    // Call the callback function
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  return (
    <select
      className="language-selector-select"
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
    >
      <option value="en">&#x1F1EC;&#x1F1E7; English</option>
      <option value="fr">&#x1F1EB;&#x1F1F7; Français</option>
    </select>
  );
};

export default LanguageSelector;
