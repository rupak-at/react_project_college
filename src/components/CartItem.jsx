function CartItem({ item, product, onChangeQty, onRemove }) {
  const lineTotal = product.price * item.quantity

  return (
    <li className="cart-item">
      <span className="cart-item-art">{product.emoji}</span>
      <div className="cart-item-info">
        <h4 className="cart-item-name">{product.name}</h4>
        <span className="cart-item-price">${product.price.toFixed(2)} each</span>
      </div>
      <div className="qty-control">
        <button type="button" onClick={() => onChangeQty(item.id, item.quantity - 1)}>
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button type="button" onClick={() => onChangeQty(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <span className="cart-item-total">${lineTotal.toFixed(2)}</span>
      <button type="button" className="remove-btn" onClick={() => onRemove(item.id)}>
        ✕
      </button>
    </li>
  )
}

export default CartItem