import React from 'react';

const Card = (props) => {
    return (

        <div className="TusksContainers__Card-item">
            <h3>{props.tusk.title}</h3>
        </div>

    );
};

export default Card;