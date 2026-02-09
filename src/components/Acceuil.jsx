
function Accueil() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-body text-center py-5">
              <h1 className="card-title display-4 fw-bold text-primary mb-4">
                📚 Bienvenue
              </h1>
              <p className="card-text lead text-muted mb-4">
                Application de gestion des modules académiques
              </p>
              <p className="card-text text-muted">
                Utilisez la barre de navigation pour accéder aux modules ou effectuer une recherche par filière.
              </p>
              <hr className="my-4" />
              <div className="mt-4">
                <a href="/modules" className="btn btn-primary btn-lg me-2">
                  Voir les Modules
                </a>
                <a href="/filieres" className="btn btn-outline-primary btn-lg">
                  Voir les Filières
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
