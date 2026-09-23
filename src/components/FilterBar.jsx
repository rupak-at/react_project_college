import { categories } from '../data/products'

const inputClass =
  'rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

function FilterBar({ search, category, sort, onSearchChange, onCategoryChange, onSortChange }) {
  return (
    <form className="mb-6 flex flex-wrap gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className={`${inputClass} basis-64 grow min-w-0`}
        placeholder="Search products..."
        value={search}
        onChange={onSearchChange}
      />
      <select className={`${inputClass} cursor-pointer`} value={category} onChange={onCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select className={`${inputClass} cursor-pointer`} value={sort} onChange={onSortChange}>
        <option value="featured">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
    </form>
  )
}

export default FilterBar