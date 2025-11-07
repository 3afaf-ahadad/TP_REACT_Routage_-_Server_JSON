import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Accueil from "./components/Acceuil.jsx";
import FormRecherche from "./components/FormRecherche.jsx";
import Liste_Module from "./components/Liste_Module.jsx";
import DetailsModule from "./components/DetailsModule.jsx";
import Filieres from "./components/Filiere.jsx";

function App() {
  const [modules, setModules] = useState([]);
  const [filteredModules, setFilteredModules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/modules")
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
        setFilteredModules(data);
      });
  }, []);

  const handleSearch = (idFiliere) => {
    const filtres = modules.filter((m) => m.filiere == idFiliere);
    if (filtres.length > 0) setFilteredModules(filtres);
    else alert("svp choisir un id valide !!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce module ?")) {
      fetch(`http://localhost:8000/modules/${id}`, { method: "DELETE" }).then(
        () => setModules(modules.filter((m) => m.id !== id))
      );
    }
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Accueil />} />

        <Route
          path="/modules"
          element={
            <>
              <FormRecherche onSearch={handleSearch} />
              <Liste_Module modules={filteredModules} onDelete={handleDelete} />
            </>
          }
        />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/modules/:id" element={<DetailsModule />} />
        <Route path="*" element={<h2>404 Page non trouvée</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
