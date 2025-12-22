


import Home from "./components/Home";
import Campus from "./components/Campus";
import Library from "./components/Library";
import Contact from "./components/contact";
import Testmonial from "./components/Testmonial";
import About from "./components/about";
import Footer from "./components/Footer";
import Navbar from "./components/Navabar";

function App() {
  return (
    <div className="bg-gray-100">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main Sections */}
      <Home />
      <About />
      <Campus />
      <Library />
      <Testmonial />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
