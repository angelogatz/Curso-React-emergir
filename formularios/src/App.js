import React from 'react'
import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <MyForm 
        user={{
          name: "Angelo Gatz",
          email: "angelogatzc@gmail.com",
          bio: "algo aqui",
          role: "user",
        }}
      />
    </div>
  );
}

export default App;
