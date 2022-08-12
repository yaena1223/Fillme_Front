import React from "react";
import styles from "../static/css/style.module.css";
function My_persona_card({ name, image, category }) {
    const imageUrl = "http://127.0.0.1:8000" + image;
    console.log(imageUrl);
    return (
        <>
            <div
                className={styles.one_persona_card}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <section className={styles.persona_card_name}>{name}</section>
                <section className={styles.persona_card_category}>{category}</section>
                <section className={styles.shadow}></section>
            </div>
        </>
    );
}

export default My_persona_card;