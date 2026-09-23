function CartItem({ item, product, onChangeQty, onRemove }) {
  const lineTotal = product.price * item.quantity

  return (
    <li className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <span className="text-3xl">{product.emoji}</span>
      <div className="min-w-0 flex-1">
        <h4 className="truncate font-medium text-gray-900">{product.name}</h4>
        <span className="text-sm text-gray-500">${product.price.toFixed(2)} each</span>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          className="h-7 w-7 rounded-md border border-gray-200 text-base leading-none transition hover:bg-gray-100"
          onClick={() => onChangeQty(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span className="w-6 text-center font-semibold">{item.quantity}</span>
        <button
          type="button"
          className="h-7 w-7 rounded-md border border-gray-200 text-base leading-none transition hover:bg-gray-100"
          onClick={() => onChangeQty(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <span className="min-w-16 text-right font-bold text-gray-900">${lineTotal.toFixed(2)}</span>
      <button
        type="button"
        className="rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </li>
  )
}

export default CartItem