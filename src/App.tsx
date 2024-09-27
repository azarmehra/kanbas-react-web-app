import React from "react";
import Kanbas from "./Kanbas";
// import "./App.css";
import Labs from "./Labs";
import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import A1 from "./A1";

function App() {
  return (
    <HashRouter>
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/Labs" />} />
                <Route path="/Labs/*" element={<Labs />} />
                <Route path="/Kanbas/*" element={<Kanbas />} />
                <Route path="/A1/*" element={<A1 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
