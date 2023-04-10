import React from 'react'
import { useState } from 'react'
import "../styles/cart.css"
import { useEffect } from 'react'

function Cart({ cart, setCart, handleRemove, removeAll, handleChange }) {
    const [price, setPrice] = useState(0)

    const handlePrice = () => {
        let prc = 0;
        cart.map((item) => {
            prc += item.price * item.amount
        })
        setPrice(prc)
    }
    useEffect(() => {
        handlePrice()
    })



    if (cart.length === 0) {
        return (
            <h1>The cart is empty</h1>
        )
    }


    return (
        <article>
            {
                cart?.map((item) => (
                    <div className='cart_box' key={item.id}>

                        <div className="cart_img">
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </div>

                        <div>
                            <button onClick={() => handleChange(item, +1)} >+</button>
                            <button>{item.amount}</button>
                            <button onClick={() => handleChange(item, -1)}>-</button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }

            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>${price}</span>
            </div>
            <button onClick={removeAll}>Remove All</button>
        </article >
    )


}

export default Cart