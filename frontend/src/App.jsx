import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import MoveBoat from "./pages/MoveBoat";
import Win from "./pages/Win";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/boats/:id/move/:x/:y" element={<MoveBoat />} />
          <Route path="/win" element={<Win />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
