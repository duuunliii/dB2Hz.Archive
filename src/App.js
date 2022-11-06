import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Album from "./routes/Album";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dB2Hz.archive/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/dB2Hz.archive/album" element={<Album />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
