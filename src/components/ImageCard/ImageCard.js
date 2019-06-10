import React from 'react';
import "./ImageCard.css";

const ImageCard = props => (
    <div 
        className = "col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
        key = { props.id }
        onClick = { () => props.handleClick(props.id, props.clicked)}
    >
        <img
            id = { props.name }
            src = { props.image }
            alt = { props.name } 
        />
    </div>
)

export default ImageCard;
