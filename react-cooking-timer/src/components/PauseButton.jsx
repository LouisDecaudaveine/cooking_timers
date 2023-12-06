import { useState } from "react";

function PauseButton({clickHandler, isPaused}){

    return (
        <button onClick={clickHandler}>
            {isPaused ? "Play" : "Pause"}
        </button>
    )

}


export default PauseButton;