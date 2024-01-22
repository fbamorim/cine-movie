import styles from "./Home.module.css"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import Banner from '../../components/Banner'
///movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          page: 1,
        }
      })

      setFilmes(response.data.results.slice(0, 12))
      setLoading(false)
    }

    loadFilmes()

  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return(
    <>
      <Banner image="home"/>
      <Title>
        <h1>Um lugar para guardar seus filmes!</h1>
      </Title>
      <section className={styles.container}>
        <div className={styles.filmes}>
          {filmes.map((filme) => {
            return(
              <article key={filme.id}>
                <h3>{filme.title}</h3>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home