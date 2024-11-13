import React, { useState } from "react";
import "./MenuHamburger.css";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import hamburgerMenu from "../../../assets/animations/hamburger-menu.json";
const MenuHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-hamburger">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Lottie animationData={hamburgerMenu} />
      </button>
      {isOpen && (
        <div className="menu">
          <a href="#home">{t("header_home")}</a>
          <a href="#about">{t("header_about")}</a>
          <a href="#skills">{t("header_skills")}</a>
          <a href="#projects">{t("header_projects")}</a>
          <a href="#contact">{t("header_contact")}</a>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
