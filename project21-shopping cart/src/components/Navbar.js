import React from 'react'
import "../styles/navbar.css"

function Navbar({ size, setShow }) {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                    My Shopping
                </span>
                <div className="cart" >
                    <span >
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span onClick={() => setShow(false)}>CART {size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar