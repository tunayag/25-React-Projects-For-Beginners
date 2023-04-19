import React, { useState } from 'react'

function Input({ URL }) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setText(e.target)} />
            </form>
        </div>
    )
}

export default Input