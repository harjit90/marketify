import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home'
import About from './about/About';
import Service from './services/Service';
import Contact from './contact/Contact';
import Navbar from './components/Navbar';
import Footer from './footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
