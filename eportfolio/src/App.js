import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import NewExperience from "./pages/Experience/NewExperience";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import NotFound from "./pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

//check that the path has no more than 2 segments, otherwise redirect to NotFound page

function App() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <Header handleScrollTop={handleScrollTop}></Header>
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<NewExperience />} />
          <Route path="/new-experience" element={<NewExperience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
