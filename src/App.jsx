import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./component/home"
import About from "./component/about";
import Projects from "./component/projects";
import Resume from "./component/resume";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* <Header />   🔝 Common Header */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* <Footer />   🔚 Common Footer */}
      </div>
    </Router>
  );
}

export default App;
