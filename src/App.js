import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Liu_menu from "./Components/Liu_menu";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Liu_Events from "./Pages/Liu_Events";
import Event_Details from "./Pages/Event_Details";
import Liu_contact from "./Pages/Liu_contact";

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Liu_menu />

      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Liu_Events />} />
          <Route path="/events/:id" element={<Event_Details />} />
          <Route path="/contact" element={<Liu_contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
