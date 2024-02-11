import AboutMe from "../About";
import ContactMe from "../Contact";
import Footer from "../Footer";
import MainPage from "../Main";
import Projects from "../Projects";
import MySkills from "../Skills";



export default function Home() {
  return (
    <>
      <MainPage />
      <MySkills />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}