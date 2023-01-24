import { FC, PropsWithChildren } from 'react'
import Cart from '../cart/Index'
import { LeftBar } from '../leftBar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='body'>
      <LeftBar />
      { children }
      <Cart />
    </div>
  )
}

export default Layout