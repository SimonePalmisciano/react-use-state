import { useState } from "react";
import styles from "./Card.module.css";

function Card(props) {
    const { language } = props;
    const { title, description } = language;

    return (
        <div className="card">
            <div className="card-body">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;

// function HelloClasse154() {
//     return (
//         <div className="container vh-100 d-flex justify-content-center align-items-center">
//             <h1 className={`${styles.title} text-primary`}>Hello Classe #154</h1>
//         </div>
//     );
// }
// export default HelloClasse154;