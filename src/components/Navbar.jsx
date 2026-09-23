import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        🛒 ShopCart
      </Link>
      <Link to="/cart" className="cart-link">
        Cart
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </nav>
  )
}

export default Navbar