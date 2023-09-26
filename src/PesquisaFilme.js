import React, { useState } from "react";

const PesquisaFilme = ({ filmes, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <h2>Pesquisar Filme</h2>
      <input
        type="text"
        placeholder="Pesquise um filme por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default PesquisaFilme;
