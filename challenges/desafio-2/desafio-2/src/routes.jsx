import { createBrowserRouter } from 'react-router-dom'
import Details from './components/Details'
import { loader } from './components/Details'
import CartPage from './components/CartPage'
import { CartProvider } from './contexts/cartContext'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'details/:productId',
    element: (
      <CartProvider>
        <Details />
      </CartProvider>
    ),
    loader: loader
  },
  {
    path: 'cart/',
    element: (
      <CartProvider>
        <CartPage />
      </CartProvider>
    )
  }
])

export default router
