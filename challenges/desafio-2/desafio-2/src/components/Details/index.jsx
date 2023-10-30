import './style.css'
import Button from '../Button'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import { listOfProducts } from '../../contexts/cartContext'
import { useContext } from 'react'
import { getProduct } from '../../services/getProduct'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const produto = await getProduct(params.productId)
  return { produto }
}

export default function Details() {
  const { produto } = useLoaderData()
  const { cartProdutos, setCartProdutos, handleSaveItems } =
    useContext(listOfProducts)

  function handleClick() {
    console.log(cartProdutos)
    handleSaveItems(produto)
    setCartProdutos(cartProdutos)
  }

  return (
    <>
      <div className="details">
        <Carousel>
          {produto?.images?.map((link, index) => {
            return (
              <div key={`${link}-${index}`}>
                <img src={link} alt="foto do produto" />
                <p className="legend">{`Foto do produto ${index + 1}`}</p>
              </div>
            )
          })}
        </Carousel>
        <span>{produto.title}</span>
        <span>R$ {produto.price} </span>
        <p>{produto.description}</p>

        <Link to={'/cart'}>
          <Button
            title="Adicionar ao carrinho"
            cor="blue"
            onClick={handleClick}
          />
        </Link>

        <Link to={`/`}>
          <Button title="Voltar" />
        </Link>
      </div>
    </>
  )
}
