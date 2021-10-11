import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    /*
     There are lotes of products available in fakedatabase so use state
     is used to display each and every products state 
     */
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    /*
    To load data we use useEffect
    */
    useEffect(() => {

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            }) //set products to state

    }, [])

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                //  console.log(key, savedCart[key])
                const selectedProduct = products.find(product => product.key === key);
                if (selectedProduct) {
                    const quantity = savedCart[key];
                    selectedProduct.quantity = quantity;
                    // console.log(selectedProduct);
                    storedCart.push(selectedProduct);
                }

            }
            setCart(storedCart);
        }


    }, [products]) // Dependency

    const handleAddToCard = (product) => {
        const newCart = [...cart, product]; // button click kore product cart a dhukano

        setCart(newCart);

        //Save to Local Storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(
            product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
        console.log(matchedProduct.length);
    }

    return (
        <div>

            <div className="searchContainer">
                <input className='searchContainer-input'
                    type="text"
                    onChange={handleSearch}
                    name="" id=""
                />
            </div>
            <div className='shop-Container'>

                <div className='product-layout'>
                    <h1>Product: {displayProducts.length}</h1>
                    <hr />
                    {
                        displayProducts.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCard={handleAddToCard}
                        >
                        </Product>)

                    }
                    < hr />
                </div>

                <div className='cart-layout'>


                    <Cart cart={cart}>
                    </Cart>

                </div>

            </div>
        </div>

    );
};

export default Shop;