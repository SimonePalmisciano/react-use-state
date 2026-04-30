import styles from "./Card.module.css";

// function HelloClasse154() {
//     return (
//         <div className="container vh-100 d-flex justify-content-center align-items-center">
//             <h1 className={`${styles.title} text-primary`}>Hello Classe #154</h1>
//         </div>
//     );
// }
// export default HelloClasse154;

function Card() {
    return (
        <div class="card">
            <div class="card-body">
                <button className="btn btn-primary">nomeLinguaggio</button>
                <p>contenutoLinguaggio</p>
            </div>
        </div>
    );
};

export default Card;