import { useState } from "react"


function ConditionalRender() {
    const [x] = useState(false)
    const [name, setName] = useState("angelo")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === 'João' ? (
                <div>
                    <p>O nome é Joao</p>
                </div>
            ):(
                <div>
                    <p>nome não encontrado</p>
                </div>
            )
        }   
        <button onClick={() => setName('João')}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender