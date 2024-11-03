import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Header from "./components/Header";
import About from "./view/About";
import Gallery from "./view/Gallery";
import Portfolio from "./view/portfolio";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./dashboard/Dashbaord";
function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="*" element={<div>404 not found</div>} />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <>
              <Portfolio />
            </>
          }
        />
        <Route
          path="/Gallery"
          element={
            <>
              <Gallery />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About />
            </>
          }
        />
        <Route path="dashboardForMohoamed" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
