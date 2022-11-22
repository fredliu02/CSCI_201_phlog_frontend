import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignUp from "./Pages/SignUp/SignUp";
import AmericanPage from "./Pages/AmericanPage/AmericanPage";
import ItalianPage from "./Pages/ItalianPage/ItalianPage";
import MexicanPage from "./Pages/MexicanPage/MexicanPage.js";
import ChinesePage from "./Pages/ChinesePage/ChinesePage";
import JapanesePage from "./Pages/JapanesePage/JapanesePage";
import IndianPage from "./Pages/IndianPage/IndianPage";
import CoffeePage from "./Pages/CoffeePage/CoffeePage";
import OtherPage from "./Pages/OtherPage/OtherPage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Restaurant" element={<RestaurantPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/HomePage" element={<HomePage />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/American" element={<AmericanPage />} />
        <Route exact path="/Italian" element={<ItalianPage />} />
        <Route exact path="/Mexican" element={<MexicanPage />} />
        <Route exact path="/Chinese" element={<ChinesePage />} />
        <Route exact path="/Japanese" element={<JapanesePage />} />
        <Route exact path="/Indian" element={<IndianPage />} />
        <Route exact path="/Coffee" element={<CoffeePage />} />
        <Route exact path="/Other" element={<OtherPage />} />
      </Routes>
    </div>
  );
}

export default App;
