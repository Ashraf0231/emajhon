import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';



const Product = (props) => {

    const { name, category, seller, star, price, img, shipping } = props.product;
    return (
        <div className='product-Container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-detail'>
                <h4> {name}</h4>
                <h5>Product Category: {category}</h5>
                <h6>Price: {price}</h6>
                <h6>Seller Name: {seller}</h6>
                <h5>Shipping Price: {shipping}</h5>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star ratingColor"
                    readonly></Rating>
                <br />
                <button
                    className='btn'
                    onClick={() => props.handleAddToCard(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </button>
            </div>


        </div >

    );
};

export default Product;