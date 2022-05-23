import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 10)} >add value to count</button>
    </div>
  )
}

export default ChangeCounter