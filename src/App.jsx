import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./component/pages/Homepage";
import Navbar from "./component/Navigation/Navbar";
import Footer from "./component/footer/Footer";
import Services from "./component/pages/Services";
import Book from "./component/pages/Book";
import About from "./component/pages/About";
import Gallery from "./component/pages/Gallery";
function App() {
  return (
    <div className="mx-2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
