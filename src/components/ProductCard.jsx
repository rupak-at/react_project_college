function ProductCard({ product, onAdd }) {
  const { name, price, category, emoji } = product

  return (
    <article className="group flex flex-col rounded-3xl border border-black/5 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div className="mb-4 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-[#fbfbfd] text-5xl transition-transform duration-300 group-hover:scale-[1.04]">
        {emoji}
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {category}
      </span>
      <h3 className="mt-1.5 text-[15px] font-medium tracking-tight text-[#1d1d1f]">{name}</h3>
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-[16px] font-semibold tracking-tight text-[#1d1d1f]">
          Rs. {price.toFixed(2)}
        </span>
        <button
          className="rounded-full bg-[#1d1d1f] px-5 py-2 text-[13px] font-medium text-white transition hover:bg-black/80 active:scale-95"
          onClick={() => onAdd(product)}
        >
          Add
        </button>
      </div>
    </article>
  )
}

export default ProductCard