import React, { useState } from "react";

const DelecaoFilme = ({ filmes, onDelete }) => {
  const [selectedId, setSelectedId] = useState("");

  const handleDelete = () => {
    onDelete(selectedId);
    setSelectedId("");
  };

  return (
    <div>
      <h2>Deletar Filme</h2>
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Selecione um filme</option>
        {filmes.map((filme) => (
          <option key={filme.id} value={filme.id}>
            {filme.title}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default DelecaoFilme;
