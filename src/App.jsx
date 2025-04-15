import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import Events from "./components/Events";
import ClickSpark from "./components/ui/ClickSpark";
import Sponsor from "./components/Sponsor";
import Faq from "./components/Faq";
import Joinus from "./components/Joinus";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import { SmoothScrollHero } from "./components/ParallaxHero";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Matches Loading.js duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ClickSpark sparkColor="#fff" sparkSize={15} sparkRadius={18} sparkCount={10} duration={500}>
        {isLoading ? (
          <Loading onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar /> {/* Navigation bar for routing */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/joinus" element={<Joinus />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/glimpsis" element={<SmoothScrollHero />} /> */}
            </Routes>
            <Footer />
          </>
        )}
      </ClickSpark>
    </Router>
  );
}

export default App;
