import { useState } from "react";
import styles from "./Button.module.css"

function Button(props) {
    const { language, onSelect, active } = props; // dichiaro una const che ha gli stessi valori di props, quindi dell'oggetto che gli ho passato
    const { id, title, description } = language; // qua dichiaro le variabili prese dalle chiavi dell'oggetto passato
    console.log(active)

    const btnClass = active ? 'btn-warning' : 'btn-primary';

    function clickHandler(event) {
        onSelect(language)
    }

    return (
        <button onClick={clickHandler} className={`btn ${btnClass}`}>{title}</button>
    )
}

export default Button