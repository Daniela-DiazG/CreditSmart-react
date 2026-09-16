import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SimulatorPage from './pages/SimulatorPage'
import RequestPage from './pages/RequestPage'
import './App.css'

function App() {
  return <BrowserRouter><Navbar /><Routes><Route path="/" element={<HomePage />} /><Route path="/simulador" element={<SimulatorPage />} /><Route path="/solicitar" element={<RequestPage />} /><Route path="*" element={<HomePage />} /></Routes><Footer /></BrowserRouter>
}

export default App
