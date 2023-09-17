import './App.css';
import About from './components/About'; 
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <About/> */}
      {/* <Service/> */}
      {/* <Experience/> */}
      {/* <Skills/> */}
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
