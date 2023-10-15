import './globals.css'
import UserProvider from './context/user'
import CartProvider from './context/cart'
import SaveProvider from './context/save'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Mazad',
  description: 'Mazad Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />


        <UserProvider>
          <CartProvider>
            <SaveProvider>
              {children}
            </SaveProvider>
          </CartProvider>
        </UserProvider>
        
      </body>
    </html>
  )
}
