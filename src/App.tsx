import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Campus from "./components/Campus/Campus";
import Library from "./components/Librarys/Library";
import Testmonial from "./components/Testmonial/Testmonial";
import Donate from "./components/Donate/Donate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Visit from "./components/visitus/Visit";

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar 
      
      
      />

      {/* Page Sections */}
      <main style={
        { paddingTop: "80px" }}>
        <Home />
        <About />
        <Campus />
        <Library />
        <Visit />
        <Testmonial />
        <Donate />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
