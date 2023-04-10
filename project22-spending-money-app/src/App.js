import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Product from './Components/Product'
import products from "./products.json"
import Basket from './Components/Basket'

function App() {
    const [money, setMoney] = useState(999)
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const resetBasket = () => {
        setBasket([])
    }

    useEffect(() => {
        setTotal(
            basket.reduce((accumilator, item) => {
                return accumilator + (item.amount * products.find((product) => product.id === item.id).price)
            }, 0),
        )
        console.log(basket)
    }, [basket])

    return (
        <>

            <Header total={total} money={money} />
            <div className="container products">
                {products.map((product) => (
                    <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
                ))}
            </div>
            <Basket total={total} products={products} basket={basket} />
            <button onClick={resetBasket}>Empty Basket</button>
        </>
    )
}

export default App