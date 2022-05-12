import { useState } from 'react'

const ListRender = () => {

    const [List] = useState(["angelo", "pedro", "josé", "joao"]);
    const [users, setUsers] = useState([
        {id: 1, name: "angelo", age: 25},
        {id: 2, name: "pedro", age: 35},
        {id: 3, name: "josé", age: 45},
        {id: 4, name: "joao", age: 55},
    ])
    const deleteRandom = () =>{
        const randoNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randoNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {List.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} tem {user.age} anos de idade
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete user</button>
    </div>
  )
}

export default ListRender