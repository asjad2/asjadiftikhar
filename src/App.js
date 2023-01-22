
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Technologies from './Components/Technologies/Technologies';
import Testimonials from './Components/Testimonials/Testimonials';
import Blogs from './Components/Blogs/Blogs';
import Contactus from './Components/Contact US/Contact-us';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Intro/>
      <Technologies/>
      <Testimonials/>
      <Blogs/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
