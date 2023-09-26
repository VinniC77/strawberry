import React, { useState } from "react";
import "./App.css";
import CadastroFilme from "./CadastroFilme";
import ListaFilmes from "./ListaFilmes";
import AtualizacaoFilme from "./AtualizacaoFilme";
import DelecaoFilme from "./DelecaoFilme";
import PesquisaFilme from "./PesquisaFilme";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [currentPage, setCurrentPage] = useState("listagem"); // Página inicial: cadastro
  const [searchResults, setSearchResults] = useState([]); // Resultados da pesquisa

  const handleAddFilme = (filme) => {
    setFilmes([...filmes, { ...filme, id: Date.now() }]);
  };

  const handleDeleteFilme = (id) => {
    setFilmes(filmes.filter((filme) => filme.id !== id));
  };

  const handleUpdateFilme = (id, newTitle) => {
    const updatedFilmes = filmes.map((filme) =>
      filme.id === id ? { ...filme, title: newTitle } : filme
    );
    setFilmes(updatedFilmes);
  };

  const handleSearchFilme = (searchTerm) => {
    // Filtra os filmes cujo título contenha o termo de pesquisa
    const results = filmes.filter((filme) =>
      filme.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  let content;

  switch (currentPage) {
    case "cadastro":
      content = <CadastroFilme onAdd={handleAddFilme} />;
      break;
    case "listagem":
      content = <ListaFilmes filmes={filmes} />;
      break;
    case "atualizacao":
      content = (
        <AtualizacaoFilme filmes={filmes} onUpdate={handleUpdateFilme} />
      );
      break;
    case "delecao":
      content = <DelecaoFilme filmes={filmes} onDelete={handleDeleteFilme} />;
      break;
    case "pesquisa":
      content = <PesquisaFilme onSearch={handleSearchFilme} />;
      break;
    default:
      content = <CadastroFilme onAdd={handleAddFilme} />;
  }

  return (
    <div className="App">
      <h1>Site de Filmes</h1>
      <div className="menu">
        <button onClick={() => setCurrentPage("cadastro")}>Cadastrar</button>
        <button onClick={() => setCurrentPage("listagem")}>Listar</button>
        <button onClick={() => setCurrentPage("atualizacao")}>Atualizar</button>
        <button onClick={() => setCurrentPage("delecao")}>Deletar</button>
        <button onClick={() => setCurrentPage("pesquisa")}>Pesquisar</button>
      </div>
      {content}
      {currentPage === "pesquisa" && <ListaFilmes filmes={searchResults} />}
    </div>
  );
}

export default App;
