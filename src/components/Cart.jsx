import React, { useContext } from 'react'
import { CartContext } from './Form'

const Cart = () => {
    const {departureEscort, transportation, officer, armed, dateDays, tshirts} = useContext(CartContext);
    const voa = 700;
    const vat = 10;
    const discount = 20;
    let security = (officer + armed) * dateDays;
    let subtotal = voa + departureEscort + transportation + security + tshirts + vat;
    let total = subtotal - discount;
    console.log(dateDays);

  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">VOA</h6>
          </div>
          <span className="text-muted">${voa}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Departure Escort</h6>
          </div>
          <span className="text-muted">${departureEscort}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Transportation</h6>
          </div>
          <span className="text-muted">${transportation}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Security Total</h6>
          </div>
          <span className="text-muted">${security}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Tshirts</h6>
          </div>
          <span className="text-muted">${tshirts}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">VAT</h6>
          </div>
          <span className="text-muted">${vat}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Subtotal (USD)</span>
          <strong>${subtotal}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Discount code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">−${discount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${total}</strong>
        </li>
      </ul>
      
      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Discount code"/>
          <button type="submit" className="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
  )
}

export default Cart