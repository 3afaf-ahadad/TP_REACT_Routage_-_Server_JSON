
import React from "react";

const Filieres = () => {
  const filieres = [
    { id: 1, nom: "Informatique" },
    { id: 2, nom: "Réseaux" },
    { id: 3, nom: "Gestion" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des Filières</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom de la filière</th>
          </tr>
        </thead>
        <tbody>
          {filieres.map((filiere) => (
            <tr key={filiere.id}>
              <td>{filiere.id}</td>
              <td>{filiere.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Filieres;
