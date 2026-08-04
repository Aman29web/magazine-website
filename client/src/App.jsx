import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AwardPage from "./pages/AwardPage";
import Contact from "./pages/Contact";
import Subscribe from "./components/subscribe/Subscribe";
import Nomination from "./components/subscribe/Nomination";
import BusunessAward from "./components/awards/BusunessAward";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<About />} />


      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/awards" element={<AwardPage></AwardPage>} />
      <Route path="/business-excellence" element={<AwardPage></AwardPage>} />
      <Route path="/subscribe" element={<Subscribe></Subscribe>} />
      <Route path="/nomination" element={<Nomination></Nomination>} />
      <Route path="/business-award" element={<BusunessAward></BusunessAward>} />




    </Routes>
  );
}

export default App;