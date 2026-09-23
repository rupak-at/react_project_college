function CartSummary({ count, total, onCheckout }) {
  return (
    <aside className="cart-summary">
      <h3 className="summary-title">Order Summary</h3>
      <p className="summary-row">
        Items <span>{count}</span>
      </p>
      <p className="summary-row total-row">
        Total <span>${total.toFixed(2)}</span>
      </p>
      <button type="button" className="btn btn-primary btn-block" onClick={onCheckout}>
        Checkout
      </button>
    </aside>
  )
}

export default CartSummary