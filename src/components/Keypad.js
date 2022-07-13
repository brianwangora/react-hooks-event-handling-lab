import { render } from "@testing-library/react";
import React from "react";

function Keypad () {
    function handleChange (event) {
        event.preventDefault();
        console.log("Entering password...");
    }

    return(
        <div>
            <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="ENTER PASSWORD"/>
        </div>
    )  
}


export default Keypad