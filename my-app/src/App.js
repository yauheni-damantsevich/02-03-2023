import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Main from "./layouts/main/main";

export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
