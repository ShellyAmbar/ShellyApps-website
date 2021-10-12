import "./App.css";
import { Navbar } from "./components/views/customs/navbar/Navbar";
import About from "./components/views/sections/about/About";
import ContactMe from "./components/views/sections/contactMe/ContactMe";
import Header from "./components/views/sections/header/Header";
import Projects from "./components/views/sections/projects/Projects";
import Technologies from "./components/views/sections/technologies/Technologies";
import Timeline from "./components/views/sections/timeline/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Timeline />
      <Projects />
      <Technologies />
      <ContactMe />
    </>
  );
}

export default App;
