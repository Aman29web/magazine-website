import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AwardPage from "./pages/AwardPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/awards" element={<AwardPage></AwardPage>} />
      <Route path="/business-excellence" element={<AwardPage></AwardPage>} />

    </Routes>
  );
}

export default App;