import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import iconVerifiedLight from "../../assets/verified-light.png";
import imgPerfil from "../../assets/perfilVerified.png";
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from "../header/menuHamburger/HamburgerMenu";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["banner", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            window.scrollY >= offsetTop - 115 &&
            window.scrollY < offsetTop + offsetHeight
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.containerTitleIcon}>
          <img className={styles.imgPerfil} src={imgPerfil} alt="Profile" />
          <h1>Agustin Arleo</h1>
          <img
            className={styles.iconVerified}
            src={iconVerifiedLight}
            alt="Verified Icon"
          />
        </div>
        {isMobile ? (
          <>
          <LanguageSwitcher />
          <HamburgerMenu handleScrollToSection={handleScrollToSection} activeSection={activeSection} />
          </>
        ) : (
          <>
            <nav className={styles.nav}>
              <ul>
                {["banner", "about", "skills", "projects", "contact"].map((sectionId) => (
                  <li
                    key={sectionId}
                    className={`${styles.item} ${activeSection === sectionId ? styles.active : ""}`}
                    onClick={() => handleScrollToSection(sectionId)}
                  >
                    {t(`header_${sectionId}`)}
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.containerIcons}>
            <LanguageSwitcher />
            </div>

          </>
        )}
         
      </div>
    </header>
  );
}

export default Header;
