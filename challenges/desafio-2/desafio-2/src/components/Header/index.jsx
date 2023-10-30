import logoImg from '../../assets/bid-web-logo.png'
import cartIcon from '../../assets/cart-icon.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-family: Agbalumo;
  font-weight: 400;

  #cart-icon {
    height: 30px;
  }

  img {
    height: 60px;
    margin-right: 10px;
  }

  h1 {
    font-size: 45px;
    font-family: Agbalumo;
    font-weight: 400;
  }

  a {
    color: rgb(229, 231, 235);
    text-decoration: none;
  }

  a:hover {
    color: #f4821f;
  }
`

const Header = ({ color, title }) => {
  return (
    <>
      <HeaderContainer backgroundColor={color}>
        <div>
          <img src={logoImg} alt="Logo Bid Store" />
        </div>
        <div>
          <Link to={`/`}>
            <h1>{title}</h1>
          </Link>
        </div>
        <div className="cart-icon">
          <Link to={`/cart`}>
            <img src={cartIcon} alt="Logo Bid Store" id="cart-icon" />
          </Link>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

Header.propTypes = {
  title: String | null,
  color: String | null
}
