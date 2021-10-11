import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    console.log(cart);
    let totalQuantity = 0;
    let shippingPrice = 0;
    let totalPrice = 0;

    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1;

        }
        totalPrice = totalPrice + product.price * product.quantity;
        //shippingPrice = total > 0 ? 15 : 0; (If Else New Format)
        shippingPrice = shippingPrice + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
        console.log(product.quantity);
        console.log(totalQuantity);
    }
    const tax = (totalPrice + shippingPrice) * .10;
    const Total = totalPrice + tax + shippingPrice;

    return (
        <div>


            <h1>Order Summary</h1>
            <hr />
            <h2>Item Ordered:{totalQuantity}</h2>
            <h4>Total Price: {totalPrice}</h4>
            <h4>Shipping Cost: {shippingPrice}</h4>
            <h6>Tax: {tax}</h6>
            <hr />
            <h5>Total Price: {Total}</h5>



        </div>
    );
};

export default Cart;