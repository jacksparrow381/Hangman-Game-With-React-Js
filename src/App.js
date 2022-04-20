import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HangManIntro } from "./Components/hangManIntro";
import { HangManHome } from "./Components/HangManHome";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HangManIntro />} />
        <Route path="/hangmangame" element={<HangManHome />} />
      </Routes>
      </Router>
  );
}

export default App;
