import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/room/:room" element={<Chat />} /> */}
          {/* <Route exact path="/home" element={<Home />} /> */}
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
