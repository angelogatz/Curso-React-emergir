import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Cars = () => {
    // rota dinamica
    const { id } = useParams()

    //carregamento do dado individual
    const url = "http://localhost:3000/Cars/" + id
    const { data: cars, loading, error } = useFetch(url)
    
    console.log(cars)

  return (
    <>
        <p>Id do produto: { id }</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando dados...</p> }
        {cars && (
            <div>
                <h1>{cars.brand}</h1>
                <p>{cars.price}</p>
                {/* nested routes */}
                <Link to={`/Cars/${cars.id}/Info`} >Mais detalhes sobre</Link>
            </div>
        )}
    </>
  )
}

export default Cars