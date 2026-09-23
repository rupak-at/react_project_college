function ProductCard({ product, onAdd }) {
  const { name, price, category, emoji } = product

  return (
    <article className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-50 text-5xl">
        {emoji}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {category}
      </span>
      <h3 className="text-base font-medium text-gray-900">{name}</h3>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          onClick={() => onAdd(product)}
        >
          Add
        </button>
      </div>
    </article>
  )
}

export default ProductCard