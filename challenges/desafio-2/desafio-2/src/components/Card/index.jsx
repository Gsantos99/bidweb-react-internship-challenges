import Button from '../Button'
import './style.css'
import { Link } from 'react-router-dom'

const Card = ({ title, price, image, id }) => {
  return (
    <div className="card">
      <img alt="Foto do produto" src={image} />
      <span>{title}</span>
      <span>R$ {price} </span>
      <Link to={`/details/${id}`}>
        <Button title="Ir para produto" classe="info" />
      </Link>
    </div>
  )
}

export default Card

Card.propTypes = {
  title: String | null,
  price: Number,
  image: Array | String | null,
  id: Number
}
