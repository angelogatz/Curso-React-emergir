import { useState } from 'react';
import './App.css';
import img2 from "./assets/img2.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Paulo"
  const [userName] = useState("Magali")

  const cars = [
    {id: 1, brand: "VW", color:"blue", newCar: false, km:"90"},
    {id: 2, brand: "Porche", color:"yellow", newCar: true, km:"123000"},
    {id: 3, brand: "Fiat", color:"red", newCar: false, km:"2456"},
  ];

  function showMessage(){
    console.log("parent component event!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em Public*/}
      <div>
        <img style={{width: "700px"}} src="/img1.jpg" alt="Montains-01" />
      </div>
      {/*Imagem em Assets*/}
      <div>
        <img style={{width: "700px"}} src={img2} alt="Montains-02" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName}/>
      <CarDetails brand="Audi" km={10000} color="Blue" newCar={false}/>
      <CarDetails brand="VW" km={200000} color="white" newCar={false}/>
      <CarDetails brand="Volvo" km={3434235} color="Black" newCar={false}/>
      <CarDetails brand="AlfaRomeo" km={0} color="Black" newCar={true}/>
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
          <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km} 
          color={car.color} 
          newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="test"/>
      {/*Childrem*/}
      <Container MyValue="teste">
        <p>este é o conteudo</p>
      </Container>
      <Container MyValue="teste2">
        <h5>Testando o container</h5>
      </Container>
      {/*prop function*/}
      <ExecuteFunction MyFunc={showMessage} />
      {/*State Lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
