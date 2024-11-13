import Styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import iconEmail from "../../assets/iconEmail.svg";
import iconLinkedin from "../../assets/iconLinkedin.svg";
import iconLocation from "../../assets/iconLocation.svg";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <footer>
      {isMobile ? (
        <>
          <div className={Styles.containerInfoContact}>
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
          <h6 className={Styles.txtFooter}>{t("textFooter")}</h6>
        </>
      ) : (
        <h6 className={Styles.txtFooter}>{t("textFooter")}</h6>
      )}
    </footer>
  );
}
export default Footer;
