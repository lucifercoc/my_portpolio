import './App.scss';

// Importing components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './components/About/RouteComponents/Intro';
import Experience from './components/About/RouteComponents/Experience';
import Internships from './components/About/RouteComponents/Internships';
import Graduation from './components/About/RouteComponents/Graduation';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header /> <Hero /> <Works /> <About /><Education /><Skill></Skill>  <Contact />
                <Footer />
              </>
            }
          />
          <Route exact path="/about/intro" element={<Intro />} />
          <Route exact path="/about/experience" element={<Experience />} />
          <Route exact path="/about/internships" element={<Internships />} />
          <Route exact path="/about/graduation" element={<Graduation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

