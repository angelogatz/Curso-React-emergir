import { useState } from 'react'

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>valor de Number: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Mudar o State</button>
        </div>
    </div>
  )
}

export default ManageData