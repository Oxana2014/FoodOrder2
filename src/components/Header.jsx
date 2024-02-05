import { useContext } from 'react'

import Button from '../UI/Button'
import logoImg from'../assets/logo.jpg'
import CartContext from '../store/CartContext'

export default function Header(){
const cartCtx = useContext(CartContext)
const totalCartItems = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0)

    return <header id="main-header" >
        <div id="title">
            <img src={logoImg} alt="A Restaurant"/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}