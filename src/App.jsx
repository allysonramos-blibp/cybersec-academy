import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Details from './pages/Details/Details'
import Terminal from './pages/Terminal/Terminal'
import attacks from './data/attacks'

console.log(attacks)

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  )
}
export default App
