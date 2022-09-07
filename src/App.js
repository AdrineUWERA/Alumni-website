import './App.scss';
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
