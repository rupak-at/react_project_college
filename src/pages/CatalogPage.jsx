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
      <header className="mb-8 text-center sm:text-left">
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-[#1d1d1f] md:text-[40px]">
          Products
        </h1>
        <p className="mt-1 text-[15px] tracking-tight text-neutral-500">
          A few essentials, carefully chosen.
        </p>
      </header>

      <FilterBar
        search={search}
        category={category}
        sort={sort}
        onSearchChange={(e) => setSearch(e.target.value)}
        onCategoryChange={setCategory}
        onSortChange={(e) => setSort(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <>
          <p className="mb-4 text-right text-[12px] font-medium tracking-wide text-neutral-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <ProductGrid
            products={filteredProducts}
            onAdd={(product) => {
              onAdd(product)
              toast.success(`${product.name} added to cart`)
            }}
          />
        </>
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