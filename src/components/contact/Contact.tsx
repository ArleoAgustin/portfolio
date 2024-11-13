import Styles from "./Contact.module.css";
import animationData from "../../assets/animations/send.json";
import AnimatedLottie from "../animatedLottie/AnimatedLottie";
//import { Slide } from "react-awesome-reveal";
import iconEmail from "../../assets/iconEmail.svg";
import iconLinkedin from "../../assets/iconLinkedin.svg";
import iconLocation from "../../assets/iconLocation.svg";
import { useTranslation } from "react-i18next";
import Form from "../form/Form";
import { useMediaQuery } from "react-responsive";
function Contact() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section id="contact" className={Styles.containerContact}>
      {/*  <Slide direction="up" triggerOnce>       </Slide>*/}
      {!isMobile ? (
        <>
          <div className={Styles.containerInfoContact}>
            <h2 className={Styles.titleContactInfo}>
              {t("contact_contactInfo")}
            </h2>
            <div className={Styles.containerUbication}>
              <img className={Styles.iconLocation} src={iconLocation} alt="" />
              <span className={Styles.ubication}>
                Tandil, Buenos Aires - Argentina
              </span>
            </div>
            <div className={Styles.containerEmail}>
              <img className={Styles.iconEmail} src={iconEmail} alt="email" />
              <span className={Styles.email}> arleo.agustin20@gmail.com </span>
            </div>

            <div className={Styles.containerLinkedin}>
              <img
                className={Styles.iconLinkedin}
                src={iconLinkedin}
                alt="linkedin"
              />
              <a
                className={Styles.urlLinkedin}
                href="http://www.linkedin.com/in/agustín-arleo-726071208"
              >
                {" "}
                {t("linkedin")}
              </a>
            </div>
          </div>
          <AnimatedLottie
            loop={true}
            animationData={animationData}
            hideOnComplete={true}
            className={Styles.animation}
          />
          <Form />
        </>
      ) : (
        <Form />
      )}
    </section>
  );
}

export default Contact;
