import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import useCart from './hooks/useCart'
import CatalogPage from './pages/CatalogPage'
import CartPage from './pages/CartPage'

function App() {
  const { cart, addToCart, changeQuantity, removeFromCart, clearCart, cartCount } = useCart()

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="mx-auto max-w-6xl px-4 py-6 pb-16">
        <Routes>
          <Route path="/" element={<CatalogPage onAdd={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App