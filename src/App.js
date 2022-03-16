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
      <div id="clients" className="fade--purple">
        <Swiper />
      </div>
      <Contact />
    </>
  );
}

export default App;
