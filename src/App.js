import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import Event from "./components/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
