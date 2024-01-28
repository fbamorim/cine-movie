import styles from './Erro.module.css'
import { Link } from 'react-router-dom'

function Erro(){
  return(
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Ir para Home</Link>
    </div>
  )
}

export default Erro