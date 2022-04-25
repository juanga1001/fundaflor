import { scroller } from "react-scroll";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Join from "./Components/Join/Join";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  function scrollToSection(section) {
    console.log(section);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div className="App">
      <nav>
        <Navbar handleScroll={scrollToSection} />
      </nav>
      <main>
        <Hero handleScroll={scrollToSection} />
        <About handleScroll={scrollToSection} />
        <Work handleScroll={scrollToSection} />
        <Join handleScroll={scrollToSection} />
        <Contact handleScroll={scrollToSection} />
      </main>
      <footer>
        <Footer handleScroll={scrollToSection} />
      </footer>
    </div>
  );
}

export default App;
