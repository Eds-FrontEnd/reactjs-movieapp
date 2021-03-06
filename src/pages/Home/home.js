import { useEffect, useState } from "react";
import "./home.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong className="titulo-filme"> {filme.nome} </strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
