import styles from "./Footer.module.css";
import logo from "../Header/logo.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={logo} alt="Logo Cine Movie"/>
      <h2>&copy;Fabio Amorim - 2024</h2>
    </footer>
  )
}

export default Footer;