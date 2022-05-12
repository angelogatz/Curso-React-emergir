
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React with CSS</h1>
      {/*CSS De Componente*/}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
    </div>
  );
}

export default App;
