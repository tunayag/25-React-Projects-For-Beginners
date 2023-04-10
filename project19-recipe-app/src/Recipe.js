import React from 'react'

function Recipe({ title, image, calories, ingredients }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <ul>
                {ingredients.map((ing, id) => (
                    <li key={id}>{ing.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
        </div>
    )
}

export default Recipe