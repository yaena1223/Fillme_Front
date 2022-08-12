import dummy from "../data.json"
import React from "react";
import {useEffect, useState} from "react"
import "../static/css/personadata.css";
import { render } from "@testing-library/react";
import { NfcSharp } from "@mui/icons-material";

function Third({color}) {

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

    const rendering_3 = (dummy => {
        const persona_3 = [];
            persona_3.push(dummy[3].persona.map(detail => (
            <p key={detail.persona_id} className="persona_data_3_in">{detail.persona_name}{detail.persona_type}</p>)))
        return persona_3;
    })
    return <div className="persona_data_3_out">{rendering_3(dummy)}</div>

}export default Third;