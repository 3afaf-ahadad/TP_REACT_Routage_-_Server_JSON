import React, { useState } from "react";

function FormRecherche({ onSearch }) {
  const [idFiliere, setIdFiliere] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(idFiliere);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="number"
        placeholder="Entrer l'id de la filière"
        value={idFiliere}
        onChange={(e) => setIdFiliere(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Rechercher
      </button>
    </form>
  );
}

export default FormRecherche;
