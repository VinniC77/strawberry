import React, { useState } from "react";

const AtualizacaoFilme = ({ filmes, onUpdate }) => {
  const [selectedId, setSelectedId] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleUpdate = () => {
    onUpdate(selectedId, updatedTitle);
    setSelectedId("");
    setUpdatedTitle("");
  };

  return (
    <div>
      <h2>Atualizar Filme</h2>
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Selecione um filme</option>
        {filmes.map((filme) => (
          <option key={filme.id} value={filme.id}>
            {filme.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Novo Título do Filme"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default AtualizacaoFilme;
