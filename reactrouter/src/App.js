//styles
import './App.css';

//components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//Config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
      {/* Seach Params */}
      <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* nested routes */}
          <Route path="/cars/:id/info" element={<Info />} />
          {/* rota dinâmica */}
          <Route path="/cars/:id" element={<Cars />} />
          {/* Search Page */}
          <Route path="/search" element={<Search />} />
          {/* redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* set no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
