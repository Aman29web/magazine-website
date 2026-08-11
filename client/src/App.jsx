import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AwardPage from "./pages/AwardPage";
import Contact from "./pages/Contact";
import Subscribe from "./components/subscribe/Subscribe";
import Nomination from "./components/subscribe/Nomination";
import BusunessAward from "./components/awards/BusunessAward";
import Interviews from "./pages/interviews/Interviews";
import InterviewDetail from "./pages/interviews/InterviewDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<About />} />
      <Route path="/interviews" element={<Interviews></Interviews>} />

<Route path="/interviews" element={<Interviews />} />

<Route
  path="/interviews/:id"
  element={<InterviewDetail />}
/>

      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/awards" element={<AwardPage></AwardPage>} />
      <Route path="/business-excellence" element={<AwardPage></AwardPage>} />
      <Route path="/subscribe" element={<Subscribe></Subscribe>} />
      <Route path="/nomination" element={<Nomination></Nomination>} />
      <Route path="/business-award" element={<BusunessAward></BusunessAward>} />




    </Routes>
    </>
  );
}

export default App;