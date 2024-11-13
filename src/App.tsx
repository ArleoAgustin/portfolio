import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Project from "./components/projects_component/Project";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
