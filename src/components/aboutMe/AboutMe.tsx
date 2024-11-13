import styles from "./AboutMe.module.css";
import { useTranslation } from "react-i18next";
import ButtonDownload from "../buttons/buttonDownload/ButtonDownload";
import AnimatedLottie from "../animatedLottie/AnimatedLottie";
import animationData from "../../assets/animations/writing.json";
import { Slide, Fade } from "react-awesome-reveal";


function AboutMe() {
  const { t } = useTranslation();

  return (
    
    <section id="about" className={styles.about}>
      <Slide direction="up" triggerOnce  delay={0} fraction={0}> 
      <div className={styles.containerAbout}>
        <div className={styles.containerTitle}>
          <Fade direction="up" triggerOnce>
          <h1 className={styles.titleAbout}>
            {t("about_title")}
            <span className={styles.sub}></span>
          </h1>
          </Fade>
        </div>
        <div className={styles.aboutContent}>
          <p>{t("about_description")}</p>
          <ButtonDownload />
        </div>
        <AnimatedLottie
          animationData={animationData}
          className={styles.animation}
          initialSegment={[0, 100]}
        />
      </div>
      
      </Slide>
    </section>
    
  );
}

export default AboutMe;
