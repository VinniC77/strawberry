import React, { useState } from "react";

const CadastroFilme = ({ onAdd }) => {
  const [filme, setFilme] = useState({ title: "", year: "", genre: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(filme);
    setFilme({ title: "", year: "", genre: "" });
  };

  return (
    <div>
      <h2>Cadastrar Filme</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título do Filme"
          value={filme.title}
          onChange={(e) => setFilme({ ...filme, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ano do Filme"
          value={filme.year}
          onChange={(e) => setFilme({ ...filme, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gênero do Filme"
          value={filme.genre}
          onChange={(e) => setFilme({ ...filme, genre: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroFilme;
