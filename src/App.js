import "./assets/styles/main.scss";
import Hero from "./components/organisms/Hero";
import CardBlock from "./components/organisms/CardBlock";
import Swiper from "./components/organisms/Swiper";
import Contact from "./components/molecules/Contact";

function App() {
  return (
    <>
      <Hero />
      <CardBlock />
      <section id="clients" className="fade--purple">
        <Swiper />
      </section>
      <Contact />
    </>
  );
}

export default App;
