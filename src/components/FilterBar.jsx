import { categories } from '../data/products'

const selectClass =
  'cursor-pointer rounded-full border border-black/5 bg-white px-4 py-2.5 text-[13px] font-medium text-[#1d1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.04)] outline-none transition focus:ring-4 focus:ring-neutral-900/5'

function FilterBar({ search, category, sort, onSearchChange, onCategoryChange, onSortChange }) {
  return (
    <form className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-center" onSubmit={(e) => e.preventDefault()}>
      <div className="relative grow">
        <span className="pointer-events-none absolute left-4.5 top-1/2 -translate-y-1/2 text-neutral-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="text"
          className="w-full rounded-full border border-black/5 bg-white py-3 pl-11 pr-5 text-[14px] tracking-tight text-[#1d1d1f] shadow-[0_1px_2px_rgba(0,0,0,0.04)] outline-none transition placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-4 focus:ring-neutral-900/5"
          placeholder="Search products…"
          value={search}
          onChange={onSearchChange}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 lg:justify-end">
        <div className="inline-flex rounded-full bg-black/5 p-1">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition sm:px-4 ${
                category === cat
                  ? 'bg-white text-[#1d1d1f] shadow-sm'
                  : 'text-neutral-500 hover:text-[#1d1d1f]'
              }`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <select className={selectClass} value={sort} onChange={onSortChange}>
          <option value="featured">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A–Z</option>
        </select>
      </div>
    </form>
  )
}

export default FilterBar