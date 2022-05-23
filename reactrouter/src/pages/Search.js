import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/Cars?" + searchParams

    const { data: items, loading, error, httpConfig } = useFetch(url)

    const handleRemove = (id) => {
        httpConfig(id, "DELETE")
    }

  return (
      
    <>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando dados...</p> }
        <div>
            <h1>Resultados disponiveis</h1>
            <ul className="cars">
              {items && items.map(item => (
                <li key={item.id}><h2>{item.brand}</h2> - R$:{item.price}
                  <button onClick={() => handleRemove(item.id)} style={{display: "flex", flexWrap: "wrap"}} >Deletar</button>
                  <Link to={`/Cars/${item.id}`} style={{textDecoration: "none"}} ><button style={{display: "flex", flexWrap: "wrap"}} >Detalhes do veículo</button></Link>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default Search