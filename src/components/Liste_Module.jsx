import Ligne from "./Ligne";

function Liste_Module({ modules, onDelete }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary fw-bold">📖 Liste des Modules</h2>
      {modules.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
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
      ) : (
        <div className="alert alert-info" role="alert">
          Aucun module trouvé. Veuillez effectuer une recherche ou réinitialiser les filtres.
        </div>
      )}
    </div>
  );
}

export default Liste_Module;
