import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import NewAd from "./pages/newad";
import AdDetails from "./pages/adDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<NewAd />} />
          <Route path="/anuncio/:id" element={<AdDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;