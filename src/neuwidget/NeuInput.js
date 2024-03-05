import React from "react";
import "./NeuInput.css";

const NeuInput = ({ value, onChange }) => {
    return (
        <input
            className="neu-input"
            type="text"
            value={value}
            onChange={onChange}
        />
    );
};

export default NeuInput;
