import React from "react";
import "./NeuCard.css";

const NeuCard = ({content}) => {
    return (
        <div className="neu-card neumorphism">
            {content}
        </div>
    );
};

export default NeuCard;
