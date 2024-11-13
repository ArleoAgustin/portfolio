import { useState, useRef, useEffect } from 'react';
import style from './HamburgerMenu.module.css';
import { useTranslation } from "react-i18next";
import iconClose from "../../../assets/x.svg";

interface HamburgerMenuProps {
  handleScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

function HamburgerMenu({ handleScrollToSection, activeSection }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Toggle no-scroll class on body when menu is open
    if (isOpen) {
      document.body.classList.add('no-scroll');
    }
    return () => {
      // Remove the class on component unmount or when the menu is closed
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={style.menuContainer} ref={menuRef}>
      <button className={style.hamburgerButton} onClick={toggleMenu}>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
      </button>
      {isOpen && (
        <nav className={`${style.menu} ${isOpen ? style.open : ''}`}>
          <div className={style.iconClose}>
            <img onClick={toggleMenu} className={style.icon} src={iconClose} alt="" />
          </div>
          <ul className={style.menuList}>
            {["banner", "about", "skills", "projects", "contact"].map((sectionId) => (
              <li
                key={sectionId}
                className={`${style.item} ${activeSection === sectionId ? style.active : ""}`}
                onClick={() => {
                  handleScrollToSection(sectionId);
                  toggleMenu();
                }}
              >
                <span>{t(`header_${sectionId}`)}</span>
              </li>
            ))}
          </ul>
          <div className={style.containerIcons}></div>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
