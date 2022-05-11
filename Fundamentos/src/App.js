//components
import FirstComponent from "./components/FirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";

//styles
import './App.css';
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
