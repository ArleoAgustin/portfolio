import { useTranslation } from "react-i18next";
import Style from "./Banner.module.css";
import AnimatedLottie from "../animatedLottie/AnimatedLottie";
import flecha from "../../assets/animations/flecha.json";
import { Fade} from "react-awesome-reveal";

function Banner() {
  const { t } = useTranslation();

  return (
    <section id="banner" className={Style.containerBanners}>

      <div className={Style.containerHello}>
      <Fade direction="up" triggerOnce>
        <span className={Style.span}>{t("banner_hello")}</span>
        </Fade>
        <h1 className={Style.h1}>{t("banner_name")}</h1>
        <p className={Style.description}>{t("banner_description")}</p>
      </div>
      <div className={Style.containerAnimation}>
        <AnimatedLottie
          loop={false}
          className={Style.animation}
          animationData={flecha}
        />
      </div>

    </section>
  );
}

export default Banner;
