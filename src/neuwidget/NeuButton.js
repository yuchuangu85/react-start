import React from "react";
import "./NeuButton.css";

const NeuButton = ({text}) => {
    return (
        <button className="neu-button">
            {text}
        </button>
    );
};

export default NeuButton;
