import React from 'react'

function BasketItem({ item, product }) {
    return (
        <>
            <h3>{product.title}x{item.amount}</h3>
        </>
    )
}

export default BasketItem