import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Community from "./features/Community/Community";
import Deals from "./features/Deals/Deals";
import Games from "./features/Games/Games";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
