import React, { useContext } from 'react'
import { CartContext } from './Form'

const Cart = () => {
    const {departureEscort, transportation, officer, armed, tshirts} = useContext(CartContext);
    const voa = 700;
    const vat = 10;
    const discount = 30;
    let security = officer + armed;
    let subtotal = voa + departureEscort + transportation + security + tshirts + vat;
    let total = subtotal - discount;

  return (
    <div className='cart bg-dark'>
        <h6>Cart</h6>
        VOA: <span>${voa}</span><br/>
        Departure Escort: <span>${departureEscort}</span><br/>
        Transportation: <span>${transportation}</span><br/>
        Security Total: <span>${security}</span><br/>
        TShirts: <span>${tshirts}</span><br/>
        VAT/TAX: <span>${vat}</span>
        <hr/>
        Subtotal: <span>${subtotal}</span>
        <hr/>
        Discount Code: <span>jd383gowh</span><br/>
        Discount Amount: <span>${discount}</span>
        <hr/>
        Total: <span>${total}</span>
    </div>
  )
}

export default Cart