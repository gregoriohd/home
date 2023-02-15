import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Post from './pages/Post/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='/post' element={<Post />}/>
             <Route path='/login' element={<Login />}/>
             <Route path='/cadastro' element={<Register />}/>
             <Route path='/about' element={<About />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

