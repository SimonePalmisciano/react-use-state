import { useState } from "react";
import styles from "./Button.module.css"

function Button(props) {
    const { language, onSelect } = props; // dichiaro una const che ha gli stessi valori di props, quindi dell'oggetto che gli ho passato
    const { id, title, description } = language; // qua dichiaro le variabili prese dalle chiavi dell'oggetto passato

    const [open, setOpen] = useState(false); // diciamo che la card deve partire chiusa, quindi al click si dovrà aprire

    const btnClass = open ? 'btn-warning' : 'btn-primary';

    function clickHandler(event) {
        onSelect(language)
        setOpen(open ? false : true)
    }

    return (
        <button onClick={clickHandler} className={`btn ${btnClass}`}>{title}</button>
    )
}

export default Button