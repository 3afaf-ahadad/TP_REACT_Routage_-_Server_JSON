import React, { useState, useEffect } from "react";
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

  if (!module) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Détails du module {module.id}</h2>
      <p><strong>Nom :</strong> {module.nom}</p>
      <p><strong>Coefficient :</strong> {module.coefficient}</p>
      <p><strong>Masse horaire :</strong> {module.masse_horaire}</p>
      <p><strong>Filière :</strong> {module.filiere}</p>

      <button onClick={() => navigate("/modules")}>Retour à la liste</button>
    </div>
  );
}

export default DetailsModule;
