import styles from "./Cabecalho.module.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"
import CabecalhoLink from "components/CabecalhoLink"

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img className={styles.logo} src={logo} alt="Logo da página."/>
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho