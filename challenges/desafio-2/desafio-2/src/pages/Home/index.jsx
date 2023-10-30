import Header from '../../components/Header'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { getAllProducts } from '../../services/getAllProducts'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SearchBar from '../../components/SearchBar'

const Home = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    getAllProducts().then(data => setProducts(data))
  }, [])

  const filteredProducts = products.filter(product => {
    return product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    }
    return 0
  })

  return (
    <>
      <Header color="rgb(63,171,197)" title="Bid Store" />
      <SearchBar>
        <input
          type="search"
          placeholder="Digite sua busca"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div>
          <label>
            Ordenar por:
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="name">Nome</option>
              <option value="price">Preço</option>
            </select>
          </label>
          <label>
            Direção:
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
        </div>
      </SearchBar>
      <section>
        {products.length === 0 ? (
          <Loading type="spin" color="rgb(63,171,197)" />
        ) : (
          sortedProducts.map(produto => {
            return (
              <Card key={produto.id} image={produto.images[0]} {...produto} />
            )
          })
        )}
      </section>
    </>
  )
}

export default Home
