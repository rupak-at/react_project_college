import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import useCart from './hooks/useCart'
import CatalogPage from './pages/CatalogPage'
import EmptyState from './components/EmptyState'

function App() {
  const { addToCart, cartCount } = useCart()

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="container">
        <Routes>
          <Route path="/" element={<CatalogPage onAdd={addToCart} />} />
          <Route
            path="/cart"
            element={<EmptyState emoji="🛒" title="Your cart is empty" message="Browse the catalog and add some items." />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App