import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import HeaderLink from "../HeaderLink"


function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img className={styles.logo} src={logo} alt="Logo Cine Movie"/>
      </Link>
      <nav>
        <HeaderLink url="./">
          Home
        </HeaderLink>
        <HeaderLink url="./Favoritos">
          Favoritos
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header