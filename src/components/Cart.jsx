import React, { useContext } from 'react'
import { CartContext } from './Form'

const Cart = () => {
    const {subtotal} = useContext(CartContext);
    const voa = 700;
    const vat = 10;
    const discount = 15;

  return (
    <div className='cart'>
        <h1>Cart</h1>
        VOA: <span>${voa}</span><br/>
        Departure Escort: <span>$</span><br/>
        Transportation: <span>$</span><br/>
        Security Total: <span>$</span><br/>
        TShirts: <span>$</span><br/>
        VAT/TAX: <span>${vat}</span>
        <hr/>
        <h3>Subtotal: <span>${subtotal - vat}</span></h3>
        <hr/>
        Discount Code: <span>jd383gowhwwo</span><br/>
        Discount Amount: <span>${discount}</span>
        <hr/>
        <h2>Total: <span>${subtotal - vat + discount}</span></h2>
    </div>
  )
}

export default Cart