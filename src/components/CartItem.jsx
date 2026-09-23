function CartItem({ item, product, onChangeQty, onRemove }) {
  const lineTotal = product.price * item.quantity

  return (
    <li className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-5">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-[#fbfbfd] text-3xl">
        {product.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[15px] font-medium tracking-tight text-[#1d1d1f]">
          {product.name}
        </h4>
        <span className="text-[13px] text-neutral-500">Rs. {product.price.toFixed(2)} each</span>
      </div>
      <div className="flex items-center gap-0.5 rounded-full bg-black/5 p-1">
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-full text-[15px] leading-none text-neutral-600 transition hover:bg-white hover:text-[#1d1d1f] active:scale-90"
          onClick={() => onChangeQty(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span className="w-7 text-center text-[13px] font-semibold text-[#1d1d1f]">
          {item.quantity}
        </span>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-full text-[15px] leading-none text-neutral-600 transition hover:bg-white hover:text-[#1d1d1f] active:scale-90"
          onClick={() => onChangeQty(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <span className="min-w-16 text-right text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
        Rs. {lineTotal.toFixed(2)}
      </span>
      <button
        type="button"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-black/5 hover:text-[#1d1d1f] active:scale-90"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${product.name}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}

export default CartItem