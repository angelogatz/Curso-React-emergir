import React from 'react'

const Container = ({ children, MyValue }) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>Valor é: {MyValue}</p>
    </div>
  )
}

export default Container