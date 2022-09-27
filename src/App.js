import './App.scss';
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import News from './pages/News';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/news" element={<News/>} />
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/involved" element={<GetInvolved/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
