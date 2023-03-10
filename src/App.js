import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
