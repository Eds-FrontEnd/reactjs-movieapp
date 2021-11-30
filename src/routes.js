import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/header";

import Home from "./pages/Home/home";
import Filme from "./pages/Movie/filme";
import Favoritos from "./pages/Favorites/favoritos";
import Erro from "./pages/Erro/erro";

const Rotes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/filme/:id" element={<Filme />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotes;
