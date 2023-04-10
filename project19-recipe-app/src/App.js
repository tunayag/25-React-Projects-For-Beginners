import React, { useEffect, useState } from 'react'
import Recipe from "./Recipe";


function App() {
    // const APP_ID = "9dfc32bb";
    // const APP_KEY = "f523c2f080779209c6aa0a76db500231";
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("tuna")

    useEffect(() => {
        getRecipes()
        console.log("We are fetching data")
    }, [query])


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9dfc32bb&app_key=f523c2f080779209c6aa0a76db500231`);
        const data = await response.json();
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search)
        setSearch("")
    }


    return (
        < div >
            <form onSubmit={getSearch} className="search-form">
                <input type="text" value={search} onChange={updateSearch} />
                <button >Search</button>
            </form>

            <div className="recipes">
                {recipes.map((recipe, id) => (

                    <div className="recipe">

                        <Recipe key={id} title={recipe.recipe.label} image={recipe.recipe.image}
                            calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} />
                    </div>

                ))}
            </div>

        </div >
    )
}

export default App

