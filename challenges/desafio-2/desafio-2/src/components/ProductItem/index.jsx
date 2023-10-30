import { useContext } from 'react'
import Button from '../Button'
import { listOfProducts } from '../../contexts/cartContext'

export default function ProductItem({ title, price, avatar, id }) {
  const { handleDeleteItem } = useContext(listOfProducts)

  return (
    <div className="card productItem" id={id}>
      <img alt="Foto do produto" src={avatar} />
      <span>{title}</span>
      <span>R$ {price} </span>
      <Button title="Remover do carinho" onClick={handleDeleteItem} />
    </div>
  )
}

ProductItem.propTypes = {
  title: String,
  price: Number,
  avatar: Array | null,
  id: Number
}
