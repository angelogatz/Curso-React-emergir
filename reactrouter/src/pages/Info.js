import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Info = () => {

    const { id } = useParams()

    const url = "http://localhost:3000/Cars/" + id
    const { data: cars, loading, error } = useFetch(url)

  return (
    <>
        {error && <p>Algo deu errado...</p>}
        {loading && <p>Carregando aguarde...</p>}
        {cars && (
            <div>
                <h1>Avaliações sobre "{cars.brand}"</h1>
                <div className="cards">
                    
                    <p>
                        <h2>Joao da silva</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero earum, doloribus aperiam eius officia blanditiis nobis nam dolorum nulla nesciunt odit pariatur quam aut et unde, magnam incidunt praesentium. 
                        <br />
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>

                    <p>
                        <h2>Mario</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero earum, doloribus aperiam eius officia blanditiis nobis nam dolorum nulla nesciunt odit pariatur quam aut et unde, magnam incidunt praesentium.
                        <br />
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>    
                    </p>

                    <p>
                        <h2>Maria C. C.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero earum, doloribus aperiam eius officia blanditiis nobis nam dolorum nulla nesciunt odit pariatur quam aut et unde, magnam incidunt praesentium.
                        <br />
                        <i class="fa-solid fa-star"></i>
                    </p>

                    <p>
                        <h2>Francisco D.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero earum, doloribus aperiam eius officia blanditiis nobis nam dolorum nulla nesciunt odit pariatur quam aut et unde, magnam incidunt praesentium.
                        <br />
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </p>

                    <p>
                        <h2>José eduardo</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero earum, doloribus aperiam eius officia blanditiis nobis nam dolorum nulla nesciunt odit pariatur quam aut et unde, magnam incidunt praesentium.
                        <br />
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </p>
                </div>
            </div>
        )}
    </>
  )
}

export default Info