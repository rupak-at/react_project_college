function ProductCard({ product, onAdd }) {
  const { name, price, category, emoji } = product

  return (
    <article className="product-card">
      <div className="product-art">{emoji}</div>
      <span className="product-category">{category}</span>
      <h3 className="product-name">{name}</h3>
      <div className="product-footer">
        <span className="product-price">${price.toFixed(2)}</span>
        <button className="btn" onClick={() => onAdd(product)}>
          Add
        </button>
      </div>
    </article>
  )
}

export default ProductCard