import React from 'react'
import "../styles/ColourBlock.css"

export default function ColourBlock({ colour, id, remove }) {
    const style = {
        backgroundColor: `${colour}` // Background is set as entered colour
    }

    return (
        <div className="colour-block border-radius flex" style={style}>
            <p className="border-radius">{colour}</p>
            <button
                className="flex"
                aria-label={`delete colour ${colour}`}
                onClick={() => remove(id)}>&#10005;
            </button>
        </div>
    )
}