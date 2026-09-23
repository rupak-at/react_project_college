function CartSummary({ count, total, onCheckout }) {
  return (
    <aside className="h-fit rounded-3xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">Order Summary</h3>
      <p className="mt-4 flex items-center justify-between text-[14px]">
        <span className="text-neutral-500">Items</span>
        <span className="font-medium text-[#1d1d1f]">{count}</span>
      </p>
      <p className="mt-2 flex items-end justify-between border-t border-black/5 pt-4">
        <span className="text-[14px] text-neutral-500">Total</span>
        <span className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
          Rs. {total.toFixed(2)}
        </span>
      </p>
      <button
        type="button"
        className="mt-6 w-full rounded-full bg-[#1d1d1f] py-3 text-[15px] font-medium text-white transition hover:bg-black/80 active:scale-[0.98]"
        onClick={onCheckout}
      >
        Checkout
      </button>
    </aside>
  )
}

export default CartSummary