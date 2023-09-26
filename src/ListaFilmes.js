import React from "react";

const ListaFilmes = ({ filmes }) => {
  return (
    <div>
      <h2>Listagem de Filmes</h2>
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            {filme.title} ({filme.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFilmes;
