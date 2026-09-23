import useLocalStorage from './useLocalStorage'

function useCart() {
  const [cart, setCart] = useLocalStorage('shopcart.cart', [])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { id: product.id, quantity: 1 }]
    })
  }

  const changeQuantity = (id, quantity) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return { cart, addToCart, changeQuantity, removeFromCart, clearCart, cartCount }
}

export default useCart