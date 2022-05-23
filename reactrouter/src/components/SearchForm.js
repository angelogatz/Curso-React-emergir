import { useNavigate } from "react-router-dom"

import { useState } from "react"

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate('/search?q=' + query);
    }

  return <form onSubmit={handleSubmit} className="seach-form" >
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <input type="submit" value="Pesquisar" />
  </form>
}

export default SearchForm