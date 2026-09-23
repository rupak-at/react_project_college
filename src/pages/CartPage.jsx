import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import EmptyState from '../components/EmptyState'

function CartPage({ cart, changeQuantity, removeFromCart, clearCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => ({ ...item, product: products.find((p) => p.id === item.id) }))
        .filter((item) => item.product !== undefined),
    [cart],
  )

  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleCheckout = () => {
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <EmptyState
        emoji="🎉"
        title="Order placed"
        message={`Thanks for shopping! Your order of $${total.toFixed(2)} is confirmed.`}
        action={
          <Link to="/" className="btn">
            Continue shopping
          </Link>
        }
      />
    )
  }

  if (cartItems.length === 0) {
    return (
      <EmptyState
        emoji="🛒"
        title="Your cart is empty"
        message="Browse the catalog and add some items."
        action={
          <Link to="/" className="btn">
            Browse products
          </Link>
        }
      />
    )
  }

  return (
    <section className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            product={item.product}
            onChangeQty={changeQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </ul>
      <CartSummary count={count} total={total} onCheckout={handleCheckout} />
    </section>
  )
}

export default CartPage