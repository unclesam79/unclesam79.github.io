import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Astrophotography from './pages/Astrophotography';

function App() {
  return (
    <Router>
      <header>
        <h1 className='greetings'><Link to="/">Greetings! My name is <span className='bigName'>Samir Mahmood</span></Link></h1>
        <nav>
          <Link to="/education">My Education</Link>
          <Link to="/experience">My Experience</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/astrophotography">My Astrophotography!</Link>
        </nav>
        <p>This website is a work in progress.</p>
        <p>
          <a href="https://github.com/unclesam79" target="_blank" rel="noopener noreferrer">
            github.com/unclesam79
          </a>
          <p>(hint: an arrow ↗ means that the link will open in a new tab)</p>
        </p>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/astrophotography" element={<Astrophotography />} />
      </Routes>
    </Router>
  );
}

export default App;
