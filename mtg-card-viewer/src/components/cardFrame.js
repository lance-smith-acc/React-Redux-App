import React from  'react'

const CardFrame = props => {
    return (
        <div key={props.id} className="cardFrame">
            <img alt={`${props.name}`} className="cardImg" src={props.url} />
            <h3 className="cardName">{props.name}</h3>
        </div>
    )     
}   

export default CardFrame;

