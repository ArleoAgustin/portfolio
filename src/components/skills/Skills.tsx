import Styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";
import iconHtml from "../../assets/iconHtml.svg";
import iconCss from "../../assets/iconCss.svg";
import iconJs from "../../assets/iconJavascript.svg";
import iconReact from "../../assets/iconReact.svg";
import iconSpringBoot from "../../assets/iconSpring-Boot.svg";
import iconJava from "../../assets/iconJava.svg";
import iconMysql from "../../assets/iconMysql.svg";
import iconPhp from "../../assets/iconPhp.svg";
import iconScrum from "../../assets/iconScrum.svg";
import iconGithub from "../../assets/iconGithub.svg";
import iconPostman from "../../assets/iconPostman.svg";
import iconFigma from "../../assets/iconFigma.svg";
import iconTrello from "../../assets/iconTrello.svg";
import iconDocker from "../../assets/iconDocker.svg";
import iconTypescript from "../../assets/iconTypescript.svg";
/*import { Slide } from "react-awesome-reveal";*/

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className={Styles.skills}>
      <div className={Styles.containerTitle}>
        <h1 className={Styles.titleSkills}>{t("skills_title")}</h1>
      </div>

    {/*   <Slide direction="up" delay={0} fraction={0} triggerOnce> </Slide>*/}
        <div className={Styles.skillsContent}>
          <div className={Styles.skill1}>
            <div className={Styles.containerTitleSkill}>
              <h2 id={Styles.frontend}>Frontend</h2>
            </div>
            <ul>
              <li id={Styles.html}>
                <img src={iconHtml} alt="" />
                <span>Html</span>
              </li>
              <li id={Styles.css}>
                <img src={iconCss} alt="" />
                <span>Css</span>
              </li>
              <li id={Styles.js}>
                <img src={iconJs} alt="" />
                <span>JavaScript</span>
              </li>
              <li id={Styles.react}>
                <img src={iconReact} alt="" />
                <span>React</span>
              </li>
              <li id={Styles.typescript}>
                <img src={iconTypescript} alt="" />
                <span>Typescript</span>
              </li>
            </ul>
          </div>
          <div className={Styles.skill2}>
            <div className={Styles.containerTitleSkill}>
              <h2 id={Styles.backend}>Backend</h2>
            </div>
            <ul>
              <li id={Styles.springBoot}>
                <img src={iconSpringBoot} alt="" />
                <span>Spring Boot</span>
              </li>
              <li id={Styles.java}>
                <img src={iconJava} alt="" />
                <span>Java</span>
              </li>
              <li id={Styles.mysql}>
                <img src={iconMysql} alt="" />
                <span>Mysql</span>
              </li>
              <li id={Styles.php}>
                <img src={iconPhp} alt="" />
                <span>PHP</span>
              </li>
            </ul>
          </div>
          <div className={Styles.skill3}>
            <div className={Styles.containerTitleSkill}>
              <h2 id={Styles.tools}>{t("skills_tools")}</h2>
            </div>
            <ul>
              <li id={Styles.scrum}>
                <img src={iconScrum} alt="" />
                <span>Scrum</span>
              </li>
              <li id={Styles.github}>
                <img src={iconGithub} alt="" />
                <span>GitHub</span>
              </li>
              <li id={Styles.postman}>
                <img src={iconPostman} alt="" />
                <span>Postman</span>
              </li>
              <li id={Styles.figma}>
                <img src={iconFigma} alt="" />
                <span>Figma</span>
              </li>
              <li id={Styles.trello}>
                <img src={iconTrello} alt="" />
                <span>Trello</span>
              </li>
              <li id={Styles.docker}>
                <img src={iconDocker} alt="" />
                <span>Docker</span>
              </li>
            </ul>
          </div>
        </div>
  
    </section>
  );
}

export default Skills;
