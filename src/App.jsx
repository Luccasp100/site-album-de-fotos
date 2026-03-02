import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/NavBar/NavBar'; 
import Galeria from './Pages/Galeria/Galeria'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagemX" element={<Galeria categoria="IMAGEMX" />} />
        <Route path="/imagemY" element={<Galeria categoria="IMAGEMY" />} />
        <Route path="/imagemZ" element={<Galeria categoria="IMAGEMZ" />} />
      </Routes>
    </Router>
  );
}

export default App;