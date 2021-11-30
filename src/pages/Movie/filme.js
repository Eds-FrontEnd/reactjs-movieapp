import { useEffect, useState } from "react";
import "./filme-info.css";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";

export default function Filme() {
  const { id } = useParams();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    return () => {
      console.log("COMPONENTE DESMONTADO");
    };
  }, [id]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //Se tiver algum filme salvo com esse mesmo id precisa ignorar...
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.error("Você já possui esse filme salvo.");
      return;
      //Para execuçao do código aqui...
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1> {filme.nome} </h1>
      <img src={filme.foto} alt={filme.nome} />

      <h2>Sinopse</h2>
      {filme.sinopse}

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            className="trailler"
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
