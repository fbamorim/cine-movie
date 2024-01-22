import { useState, useEffect } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'

import { toast } from "react-toastify"
import Banner from '../../components/Banner'
import Title from '../../components/Title'


function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@cineflix")
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  function excluirFIlme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem("@cineflix", JSON.stringify(filtroFilmes))
    toast.success("Filme removido com sucesso...")
  }

  return(
    <>
      <div style={{padding: 35}}></div>
      <Banner image="favoritos"/>
      <Title>
        <h1>Minha lista de favoritos</h1>
      </Title>
      <div className="meus-filmes">

        {filmes.length === 0 && <span>Você não possui filmes salvos...</span>}

        <ul>
          {filmes.map((item) => {
            return(
              <li key={item.id}>
                <span>{item.title}</span>
                <div>
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                  <button onClick={() => excluirFIlme(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Favoritos