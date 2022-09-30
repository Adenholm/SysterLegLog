import React from "react";
import StartPage from "./pages/index.page";
import CardPage from "./pages/cards.page";
import CategoryPage from "./pages/categories.page";
import GuessPage from "./pages/guess-page.page";
import Header from "./Layouts/Header.js";
import "./App.css";
import GuessSound from "./pages/guess-sound.page";
import Footer from "./Layouts/Footer";

const Pages = () => {
  return (
    <div className="pagesBackground">
      <Header />
      <div className="pages">
        <Routes>
          <Route exact path="/" element={<StartPage />}></Route>
          <Route exact path="/Cards" element={<CardPage />}></Route>
          <Route exact path="/CategoryPage" element={<CategoryPage />}></Route>
          <Route exact path="/GuessGame" element={<GuessPage />}></Route>
          <Route exact path="/GuessSound" element={<GuessSound />}></Route>
        </Routes>
      </div>
      {Footer()}
    </div>
  );
};

export default Pages;
