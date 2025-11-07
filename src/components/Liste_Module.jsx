import React from "react";
import Ligne from "./Ligne";

function Liste_Module({ modules, onDelete }) {
  return (
    <div>
      <h2>Liste des modules</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Coefficient</th>
            <th>Masse Horaire</th>
            <th>Filière</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((m) => (
            <Ligne key={m.id} module={m} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Liste_Module;
