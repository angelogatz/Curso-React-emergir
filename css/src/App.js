
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Angelo")
  const redTitle = true

  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React with CSS</h1>
      {/*CSS De Componente*/}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
      {/* inline css */}
      <p style={{color: "blue",
          padding: "25px",
          borderTop: "2px solid red"
        }}>
          Elemento personalizado inline
      </p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}> Css Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}> Css Dinâmico</h2>
      <h2 style={name === "Angelo" ? ({color: "salmon", backgroundColor: "black"}) : null}> Css Dinâmico Nome</h2>
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "redClass" : "blueClass"}>Este elemento tem Classe Dinâmica</h2>
      {/* css modules */}
      <Title />
      <h2 className="my_title">testando</h2>
    </div>
  );
}

export default App;
