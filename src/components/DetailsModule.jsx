
import { useParams, useNavigate } from "react-router-dom";

function DetailsModule() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/modules/${id}`)
      .then((res) => res.json())
      .then((data) => setModule(data));
  }, [id]);

  if (!module)
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <p className="mt-3">Chargement du module...</p>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">📋 Module #{module.id}</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Nom du Module</label>
                <p className="card-text">{module.nom}</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Coefficient</label>
                <p className="card-text">{module.coefficient}</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Masse Horaire</label>
                <p className="card-text">{module.masse_horaire} heures</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Filière</label>
                <p className="card-text">{module.filiere}</p>
              </div>
            </div>
            <div className="card-footer bg-light">
              <button
                onClick={() => navigate("/modules")}
                className="btn btn-primary w-100"
              >
                ← Retour à la liste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModule;
