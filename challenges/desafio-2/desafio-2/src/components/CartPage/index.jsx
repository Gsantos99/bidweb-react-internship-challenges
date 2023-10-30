import { useContext } from 'react'
import { CartProvider, listOfProducts } from '../../contexts/cartContext'
import Header from '../Header'
import ProductItem from '../ProductItem'
import './style.css'
import { Link } from 'react-router-dom'
import backIcon from '../../assets/back-icon.png'

export default function CartPage() {
  const { cartProducts } = useContext(listOfProducts)

  const carrinhoItens = cartProducts.map(item => {
    return (
      <ProductItem
        key={item.id}
        title={item.title}
        price={item.price}
        avatar={item.images}
      />
    )
  })

  const totalItens = cartProducts.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  )

  return (
    <>
      <Header color="rgb(63,171,197)" title="Bid Store" />

      <CartProvider>
        <section className="cart-container">
          <Link to={`/`}>
            <img src={backIcon} alt="Logo Bid Store" id="back-icon" />
          </Link>

          <div className="heading">
            <h1>Meu carrinho</h1>
          </div>

          <section className="produtos-container">
            {cartProducts.length > 0
              ? carrinhoItens
              : 'Adicione algum produto ao carinho!'}
          </section>

          <section className="price">
            <h2>Total: R$</h2>
            <h2>{totalItens}</h2>
          </section>
        </section>
      </CartProvider>
    </>
  )
}
