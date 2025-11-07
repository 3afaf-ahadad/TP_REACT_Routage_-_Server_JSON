import React from "react";
import { Link } from "react-router-dom";

function Ligne({ module, onDelete }) {
  return (
    <tr>
      <td>{module.id}</td>
      <td>{module.nom}</td>
      <td>{module.coefficient}</td>
      <td>{module.masse_horaire}</td>
      <td>{module.filiere}</td>
      <td>
        <Link to={`/modules/${module.id}`} style={{ marginRight: "10px" }}>
          Détails
        </Link>
        <button onClick={() => onDelete(module.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Ligne;
