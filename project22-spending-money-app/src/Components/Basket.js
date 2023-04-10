import React from 'react'
import BasketItem from "./BasketItem"

function Basket({ basket, products, total }) {


    return (
        <>
            {
                basket.map((item) => (
                    <BasketItem key={item.id} product={products.find((p) => p.id === item.id)} item={item} />
                ))
            }

            {total > 0 && (
                <div>
                    Total:${total}
                </div>
            )}
        </>
    )
}

export default Basket