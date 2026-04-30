import { useState } from "react";
import styles from "./Card.module.css";

// function HelloClasse154() {
//     return (
//         <div className="container vh-100 d-flex justify-content-center align-items-center">
//             <h1 className={`${styles.title} text-primary`}>Hello Classe #154</h1>
//         </div>
//     );
// }
// export default HelloClasse154;

function Card(props) {
    const { language } = props; // dichiaro una const che ha gli stessi valori di props, quindi dell'oggetto che gli ho passato
    const { id, title, description } = language; // qua dichiaro le variabili prese dalle chiavi dell'oggetto passato

    const [open, setOpen] = useState(false); // diciamo che la card deve partire chiusa, quindi al click si dovrà aprire

    const btnClass = open ? 'btn-warning' : 'btn-primary';

    return (
        <div className="card">
            <div className="card-body">
                <button className={`btn ${btnClass}`}>{title}</button>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;