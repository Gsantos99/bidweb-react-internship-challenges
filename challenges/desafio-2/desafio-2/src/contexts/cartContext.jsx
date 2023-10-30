import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react-refresh/only-export-components
export const listOfProducts = createContext([])

export function CartProvider({ children }) {
  let itemsDB = JSON.parse(localStorage.getItem('listOfProducts')) ?? []
  const [cartProducts, setCartProducts] = useState(itemsDB)

  function handleSaveItems(produto) {
    itemsDB.push(produto)
    localStorage.setItem('listOfProducts', JSON.stringify(itemsDB))
  }

  function handleDeleteItem(itemIndex) {
    const updatedCart = [...cartProducts]
    updatedCart.splice(itemIndex, 1)
    setCartProducts(updatedCart)
    localStorage.setItem('listOfProducts', JSON.stringify(updatedCart))
    window.location.reload()
  }

  return (
    <listOfProducts.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleSaveItems,
        handleDeleteItem
      }}
    >
      {children}
    </listOfProducts.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
