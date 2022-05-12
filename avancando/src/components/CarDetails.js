import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM's: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este é o carro da vez</p>}
    </div>
  )
}

export default CarDetails