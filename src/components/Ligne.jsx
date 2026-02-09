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
        <Link to={`/modules/${module.id}`} className="btn btn-sm btn-info me-2">
          Détails
        </Link>
        <button 
          onClick={() => onDelete(module.id)}
          className="btn btn-sm btn-danger"
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}

export default Ligne;
