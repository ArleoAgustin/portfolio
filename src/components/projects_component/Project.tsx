import CardProject from "./card/CardProject";
import styles from "./Project.module.css";
import { useTranslation } from "react-i18next";
import imgProject1 from "../../assets/infoDolar.png";
import imgProject2 from "../../assets/miViandita.png";
import iconReact from "../../assets/iconReact.svg";
import iconTypescript from "../../assets/iconTypescript.svg";
import iconHtml from "../../assets/iconHtml.svg";
import iconCss from "../../assets/iconCss.svg";
import iconJs from "../../assets/iconJavascript.svg";
//import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
import Carousel from "../carousel/Carousel"; // Asegúrate de importar correctamente el componente Carousel

function Project() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const linkInfoDolar = "https://info-dolar.netlify.app/";
  const linkGitInfoDolar = "https://github.com/ArleoAgustin/infoDolar";
  const technologiesInfoDolar = [iconReact, iconTypescript];

  const linkMiViandita = "";
  const linkGitMiViandita = "https://github.com/ArleoAgustin/web-1";
  const technologiesMiViandita = [iconHtml, iconCss, iconJs];
  const { t } = useTranslation();

  // Array de proyectos
  const projectCards = [
    <CardProject
      key="InfoDolar"
      title="InfoDolar"
      technologies={technologiesInfoDolar}
      urlLink={linkInfoDolar}
      urlGit={linkGitInfoDolar}
      description={t("project_d1")}
      urlImg={imgProject1}
    />,
    <CardProject
      key="MiViandita"
      title="MiViandita"
      technologies={technologiesMiViandita}
      urlLink={linkMiViandita}
      urlGit={linkGitMiViandita}
      description={t("project_d2")}
      urlImg={imgProject2}
    />
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.containerTitle}>
        <h1 className={styles.titleProjects}>{t("project_title")}</h1>
      </div>
      {/* <Slide direction="up" triggerOnce>*/}
        {isMobile ? (
          <div className="max-w-lg">
            
            <Carousel autoSlide={true} >
              {projectCards}
            </Carousel>
          </div>
        ) : (
          <div className={styles.projectsCards}>{projectCards}</div>
        )}
    
    </section>
  );
}

export default Project;
