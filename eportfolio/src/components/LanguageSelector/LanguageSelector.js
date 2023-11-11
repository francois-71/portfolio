import React, { useState } from "react";
import "./languageselector.css";
import i18n from "../../i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <select className="language-selector-select" defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="en">&#x1F1EC;&#x1F1E7; English</option>
      <option value="fr">&#x1F1EB;&#x1F1F7; Français</option>
    </select>
  );
};

export default LanguageSelector;
