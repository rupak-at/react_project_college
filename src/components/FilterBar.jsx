import { categories } from '../data/products'

function FilterBar({ search, category, sort, onSearchChange, onCategoryChange, onSortChange }) {
  return (
    <form className="filter-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={search}
        onChange={onSearchChange}
      />
      <select className="filter-select" value={category} onChange={onCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select className="filter-select" value={sort} onChange={onSortChange}>
        <option value="featured">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
    </form>
  )
}

export default FilterBar