import "./Home.css"

import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Home = () => {
  //carregamento de dados
  const url = "http://localhost:3000/Cars"

  const {data: items, httpConfig, loading, error } = useFetch(url)

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div>
      <h1>Carros</h1>
      {error && <p>{error}</p>}
      {!error && (
        <ul className="cars">
          {items && items.map(item => (
            <li key={item.id}><h2>{item.brand}</h2> - R$:{item.price}
              <button onClick={() => handleRemove(item.id)} style={{display: "flex", flexWrap: "wrap"}} >Deletar</button>
              <Link to={`/Cars/${item.id}`} style={{textDecoration: "none"}} ><button style={{display: "flex", flexWrap: "wrap"}} >Detalhes do veículo</button></Link>
            </li>
          ))}
        </ul>
      )}
      {loading && (
        <ul>
          <button disabled >Deletar</button>
        </ul>
      )}
    </div>
    
  )
}

export default Home