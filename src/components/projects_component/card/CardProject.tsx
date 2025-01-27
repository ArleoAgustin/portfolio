import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import style from './CardProject.module.css';
import iconGit from '../../../assets/iconGithub.svg';

interface CardProjectProps {

  urlImg: string;
  title: string;
  description: string;
  urlLink?: string;
  urlGit?: string;
  technologies?: string[];
}

export default function CardProject({urlImg, title, description, urlLink, urlGit, technologies}: CardProjectProps) {
  return (
    <div className={style.card}>
      <CardMedia className={style.img} component="img" height="140" image={urlImg}/>
      <CardContent className={style.cardContent}>
        <div className={style.containerTech}>
          {technologies?.map((tech, index) => (
            <img className={style.technologi} src={tech} key={index}/>
          ))}
        </div>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        
        <div className={style.description}>
          <p>{description}</p>
          </div>
      </CardContent>
      <CardActions className={style.containerIcons}>
    <a target="_blank" href={urlLink}>
    <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="External">
  <g fill="#ffffff" className="color000000 svgShape">
    <g fill="#ffffff" className="color000000 svgShape">
      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" fill="#ffffff" className="color000000 svgShape"></path>
      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" fill="#ffffff" className={style.secondPath}></path>
    </g>
  </g>
</svg>
        <span className={style.tipLink}>Visitar sitio web</span>
    </a>
    <a target="_blank" href={urlGit}>
        <img className={style.icon} src={iconGit} alt="" />
        <span className={style.tipLinkGit}>Ver en GitHub</span>
    </a>
</CardActions>
    </div>
  );
}
