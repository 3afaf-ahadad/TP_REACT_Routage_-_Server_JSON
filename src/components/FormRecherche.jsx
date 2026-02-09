
function FormRecherche({ onSearch }) {
  const [idFiliere, setIdFiliere] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(idFiliere);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 mb-4">
      <div className="row g-2 align-items-end">
        <div className="col-md-6">
          <label htmlFor="filiereInput" className="form-label fw-bold">
            Rechercher par Filière
          </label>
          <input
            id="filiereInput"
            type="number"
            className="form-control"
            placeholder="Entrer l'ID de la filière (1, 2 ou 3)"
            value={idFiliere}
            onChange={(e) => setIdFiliere(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary w-100">
            🔍 Rechercher
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormRecherche;
