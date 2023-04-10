import React from 'react'
import "../styles/cards.css"

function Cards({ item, handleClick }) {
    const { id, title, author, price, img, amount } = item


    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price - {price}$</p>
                <button onClick={() => handleClick(item)} >Add to Cart</button>
            </div>
        </div>
    )
}

export default Cards