import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import useCart from './hooks/useCart'
import CatalogPage from './pages/CatalogPage'
import CartPage from './pages/CartPage'

function App() {
  const { cart, addToCart, changeQuantity, removeFromCart, clearCart, cartCount } = useCart()

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="mx-auto max-w-5xl px-5 py-10 pb-24 md:px-8 md:py-14">
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
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#1d1d1f',
            color: '#ffffff',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '500',
            padding: '10px 18px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)',
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App