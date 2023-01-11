import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Testimonies from './components/Testimonies';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Portfolio />
      <Services />
      <Testimonies />
      <Contact />
    </>
  );
}

export default App;
