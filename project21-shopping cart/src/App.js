import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import list from './data';


function App() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleRemove = (id) => {
        const newI = cart.filter((item) => item.id !== id)
        setCart(newI)
    }

    const removeAll = () => {
        setCart([])
    }

    const handleClick = (item) => {
        console.log(item)
        let isPresent = false;
        cart.forEach((product) => {
            if (product.id === item.id)
                isPresent = true;
        })


        if (isPresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000)
            return;
        }

        setCart([...cart, item])
    }

    const handleChange = (item, d) => {
        let idx = -1
        console.log(item, d)

        cart.map((data, index) => {
            if (data.id === item.id)
                idx = index
        })
        const tempArr = cart;
        tempArr[idx].amount += d
        if (tempArr[idx].amount === 0) {
            tempArr[idx].amount = 1
        }
        setCart([...tempArr])
    }



    return (
        <React.Fragment>
            <Navbar size={cart.length} setShow={setShow} />
            {
                show ? <Amazon handleClick={handleClick} />
                    : <Cart cart={cart} setCart={setCart} handleRemove={handleRemove} removeAll={removeAll} handleChange={handleChange} />
            }

            {
                warning && <div className="warning">Item is already added to your cart</div>
            }
        </React.Fragment>
    )
}

export default App