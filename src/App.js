import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import NoMatch from "./components/Nomatch";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
     
    </div>
  );
}

export default App;
