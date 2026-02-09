

const Filieres = () => {
  const filieres = [
    { id: 1, nom: "Informatique", icon: "💻" },
    { id: 2, nom: "Réseaux", icon: "🌐" },
    { id: 3, nom: "Gestion", icon: "📊" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary fw-bold">🎓 Liste des Filières</h2>
      <div className="row">
        {filieres.map((filiere) => (
          <div key={filiere.id} className="col-md-4 mb-4">
            <div className="card shadow h-100 border-0 hover:shadow-lg">
              <div className="card-body text-center">
                <h3 className="card-title fs-1 mb-2">{filiere.icon}</h3>
                <h5 className="card-title text-primary fw-bold">{filiere.nom}</h5>
                <p className="card-text text-muted">ID: {filiere.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filieres;
