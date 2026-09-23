function CartSummary({ count, total, onCheckout }) {
  return (
    <aside className="self-start rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-gray-900">Order Summary</h3>
      <p className="flex justify-between">
        <span className="text-gray-600">Items</span>
        <span className="font-medium">{count}</span>
      </p>
      <p className="mb-4 mt-3 flex justify-between border-t border-gray-200 pt-3 text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </p>
      <button
        type="button"
        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        onClick={onCheckout}
      >
        Checkout
      </button>
    </aside>
  )
}

export default CartSummary