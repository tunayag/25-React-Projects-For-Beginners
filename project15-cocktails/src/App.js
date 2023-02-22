import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from "./pages/Home"
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Navbar from './components/Navbar'


function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about/pages' element={<About />} />
                <Route path='/cocktail:id' element={<SingleCocktail />} />
                <Route path='/*' element={< Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App