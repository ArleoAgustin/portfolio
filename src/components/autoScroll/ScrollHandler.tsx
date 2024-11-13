import { useEffect, useState } from "react";

interface ScrollHandlerProps {
  initialSection: string;
}

function ScrollHandler({ initialSection }: ScrollHandlerProps) {
  const [currentSection, setCurrentSection] = useState(initialSection);
  const [isAutomaticScroll, setIsAutomaticScroll] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (!isAutomaticScroll || isScrolling) return;

      const bannerSection = document.getElementById("banner");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");

      if (!bannerSection || !aboutSection || !skillsSection) return;

      // Si estamos por debajo de la sección "about", permitir scroll normal
      if (window.scrollY > aboutSection.offsetTop + aboutSection.offsetHeight) {
        return;
      }

      event.preventDefault();
      setIsScrolling(true);

      const scrollingDown = event.deltaY > 0;
      let targetElement;

      if (currentSection === "banner" && scrollingDown) {
        targetElement = aboutSection;
        setCurrentSection("about");
      } else if (currentSection === "about" && !scrollingDown) {
        targetElement = bannerSection;
        setCurrentSection("banner");
      }

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Restablecer isScrolling después de que la animación termine
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Ajusta este valor según sea necesario
      } else {
        setIsScrolling(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAutomaticScroll(false);
      }
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isAutomaticScroll, isScrolling]);

  return null;
}

export default ScrollHandler;