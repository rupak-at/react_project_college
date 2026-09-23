import { useState, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import products from '../data/products'
import FilterBar from '../components/FilterBar'
import ProductGrid from '../components/ProductGrid'
import EmptyState from '../components/EmptyState'

function CatalogPage({ onAdd }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()

    let result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesSearch = product.name.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [search, category, sort])

  return (
    <section>
      <h1 className="mb-5 text-2xl font-bold text-gray-900">Products</h1>
      <FilterBar
        search={search}
        category={category}
        sort={sort}
        onSearchChange={(e) => setSearch(e.target.value)}
        onCategoryChange={(e) => setCategory(e.target.value)}
        onSortChange={(e) => setSort(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <ProductGrid
          products={filteredProducts}
          onAdd={(product) => {
            onAdd(product)
            toast.success(`${product.name} added to cart`)
          }}
        />
      ) : (
        <EmptyState
          emoji="🔍"
          title="No products found"
          message="Try a different search term or category."
        />
      )}
    </section>
  )
}

export default CatalogPage