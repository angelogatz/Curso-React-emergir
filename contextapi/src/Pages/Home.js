// import { useContext } from "react"
import ChangeCounter  from "../components/ChangeCounter"

// import { CounterContext } from "../context/CounterContext"

//refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

//context mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext"

const Home = () => {

    // const { counter } = useContext(CounterContext)
    const { counter } = useCounterContext();

    //contexto mais complexo
    const { color, dispatch } = useTitleColorContext();

    console.log(color)

    //alterando state context complexo
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do counter: {counter}</p>
        {/* alterando valor do context */}
        <ChangeCounter />
        {/* alterando state context complexo */}
        <button onClick={() => setTitleColor("RED")} >Vermelho</button>
        <button onClick={() => setTitleColor("MAGENTA")} >Magenta</button>
        <button onClick={() => setTitleColor("GOLD")} >Gold</button>
        <button onClick={() => setTitleColor("GREEN")} >Green</button>
        <button onClick={() => setTitleColor("PINK")} >Pink</button>
    </div>
  )
}

export default Home