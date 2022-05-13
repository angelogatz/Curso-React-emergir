import { useState } from 'react'
import './MyForm.module.css'

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando form")
        console.log('Nome: ' + name,'Email: ' + email, 'Mensagem: ' + bio, 'Role: ' + role)

        setName('');
        setEmail('');
        setBio('');
        
    }

    
  return (
    <div>
        {/* 1- criação de Formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: {name}</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={(event) => setName(event.target.value)} 
                    value={name}
                />
            </div>
            {/* label envolvendo input */}
            <label>
                <span>E-mail: {email}</span>
                <input 
                    type="email"
                    name="email"
                    placeholder="Digite o seu E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
            </label>
            <label htmlFor="bio">
                <span>Bio: </span>
                <textarea name="bio" placeholder='Sua descrição aqui' onChange={(event) => setBio(event.target.value)} value={bio} cols="30" rows="3"></textarea>
            </label>
            <br />
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(event) => setRole(event.target.value)} value={role} >
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="Admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm