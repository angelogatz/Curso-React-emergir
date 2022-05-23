import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
import useTitleColorContext from "../hooks/useTitleColorContext";

const Products = () => {
    const {counter} = useCounterContext()

    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({type: color})
    }

    return (
      <div>
        <h1 style={{color: color}} >Home</h1>
        <p>Valor do counter: {counter}</p>
        <ChangeCounter />
        <button onClick={() => setTitleColor("RED")} >Vermelho</button>
        <button onClick={() => setTitleColor("MAGENTA")} >Magenta</button>
        <button onClick={() => setTitleColor("GOLD")} >Gold</button>
        <button onClick={() => setTitleColor("GREEN")} >Green</button>
        <button onClick={() => setTitleColor("PINK")} >Pink</button>
      </div>
    )
}

export default Products