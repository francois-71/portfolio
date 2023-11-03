import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Project from './pages/Project/Project';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import PdfViewer from './pages/Pdfviewer/PdfViewer';
import NotFound from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  return (
    
    <div className="App">
      <Header />
        <div className="pages-container">
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Project />}/>
            <Route path="/resume" element={<PdfViewer />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
