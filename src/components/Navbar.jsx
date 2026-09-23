import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-20 border-b border-black/5 bg-[#f5f5f7]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
          ShopCart
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-medium text-[#1d1d1f] transition hover:bg-black/5 active:scale-95"
        >
          Cart
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#1d1d1f] px-2 text-[11px] font-semibold text-white">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar