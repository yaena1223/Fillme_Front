import { useEffect, useState } from "react";
import "../static/css/Discover_card.css";
import feed from "../routes/Discover";

import React from "react";
function Discover_card({
    id,
    persona_image,
    persona_name,
    card,
}) {
    const persona_style = {
        backgroundImage: `url(${card.persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        console.log("hover change");
    }, [hover]);

    const feelings_style = {
        backgroundImage: `url(${persona_image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };
    if (hover) {
        return (
            <div
                className="per_card2"
                id={"card" + id}
                style={feelings_style}
                onMouseLeave={OnmouseLeave}
            >
                    <section id="persona_name">{persona_name}</section>
            </div>
        );
    } else {
        return (
            <div
                className="per_card"
                id={"card" + id}
                style={feelings_style}
                onMouseEnter={OnmouseEnter}
            >
                    <section id="persona_name">{persona_name}</section>
            </div>
        );
    }
}
export default Discover_card;

function render_Discover_card(card) {
    return (
        feed.map(<Discover_card key={card.id}
            user_id={card.user_id}
            persona={card.persona}
            persona_image={card.persona_image}/>)
    )
}