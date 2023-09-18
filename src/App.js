import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Service/> */}
      {/* <Experience/> */}
      {/* <Skills/> */}
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
