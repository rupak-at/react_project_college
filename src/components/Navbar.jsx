import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-5 py-3">
      <Link to="/" className="text-xl font-bold text-gray-900">
        🛒 ShopCart
      </Link>
      <Link
        to="/cart"
        className="flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-gray-900 transition hover:bg-gray-100"
      >
        Cart
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-bold text-white">
          {cartCount}
        </span>
      </Link>
    </nav>
  )
}

export default Navbar