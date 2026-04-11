import './App.css';
import Layout from './components/layout';
import { About } from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import Career from './pages/career';

function App() {
  return (
    <>
      <Layout>
        <div id="about" className="pt-12">
          <About />
        </div>
        <div id="career" className="pt-12">
          <Career />
        </div>
        <div id="projects" className="pt-12">
          <Project />
        </div>
        <div id="contact" className="pt-12">
          <Contact />
        </div>
      </Layout>
    </>
  );
}

export default App;
