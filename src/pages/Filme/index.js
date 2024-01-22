import "./filme.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import api from "../../services/api"

import { toast } from "react-toastify"
import Banner from "../../components/Banner"
import Title from "../../components/Title"

function Filme(){
  const { id } = useParams()
  const navigate = useNavigate()

  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        } 
      })
      .then((response) => {
        setFilme(response.data)
        setLoading(false)
        console.log(response.data)
      })
      .catch(() => {
        navigate("/", { replace: true })
        return
      })
    }

    loadFilme()

    return () => {
      console.log('quebrou')
    }

  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@cineflix")

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme){
      toast.warn("Este filme já está na lista!")
      return
    }
    filmesSalvos.push(filme)
    localStorage.setItem("@cineflix", JSON.stringify(filmesSalvos))
    toast.success("Filme salvo com sucesso...")
  }

  if(loading){
    return(
      <div className="filme-info">
        <h2>Carregando detalhes...</h2>
      </div>
    )
  }

  return(
    <>
      <div style={{padding: 35}}></div>
      <Banner image="Player"/>
      <Title>
        <h1>Mais detalhes do filme</h1>
      </Title>
      <div className="filme-info">
        <h2>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

        <div className="area-buttons">
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a target="blank" rel="noopener" href={`https://youtube.com/results?search_query=${filme.title} Trailer`} >
              Trailer
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Filme