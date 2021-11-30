import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido com sucesso!");
  }

  return (
    <div id="meus-filmes">
      <h1>Meus Filmes Favoritos</h1>

      {filmes.length === 0 && (
        <span className="favoritos-vazio">
          Você não possui nenhum filme salvo :({" "}
        </span>
      )}

      <ul className="favoritos">
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <img className="foto-filme" src={item.foto} alt={item.nome} />
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button
                  className="excluir"
                  onClick={() => handleDelete(item.id)}
                >
                  Excluir
                </button>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
