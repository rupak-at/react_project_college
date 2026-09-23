import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import products from '../data/products'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import EmptyState from '../components/EmptyState'

const actionBtnClass =
  'inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700'

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

  const handleRemove = (id, name) => {
    removeFromCart(id)
    toast(`${name} removed from cart`)
  }

  const handleCheckout = () => {
    setOrderPlaced(true)
    clearCart()
    toast.success('Order placed! Thanks for shopping 🎉')
  }

  if (orderPlaced) {
    return (
      <EmptyState
        emoji="🎉"
        title="Order placed"
        message={`Thanks for shopping! Your order of $${total.toFixed(2)} is confirmed.`}
        action={
          <Link to="/" className={actionBtnClass}>
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
          <Link to="/" className={actionBtnClass}>
            Browse products
          </Link>
        }
      />
    )
  }

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="mb-5 text-2xl font-bold text-gray-900">Your Cart</h1>
        <ul className="flex flex-col gap-3">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              product={item.product}
              onChangeQty={changeQuantity}
              onRemove={(id) => handleRemove(id, item.product.name)}
            />
          ))}
        </ul>
      </div>
      <CartSummary count={count} total={total} onCheckout={handleCheckout} />
    </section>
  )
}

export default CartPage