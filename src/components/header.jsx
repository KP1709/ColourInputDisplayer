import React from "react";

export default function Header(){
    const style = {
        marginBottom: "0.5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center" 
    }
    
    return (
        <header style={style} data-test="page-header">
            <h1>Colour Input Displayer</h1>
        </header>
    )
}