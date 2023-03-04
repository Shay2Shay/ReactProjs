import React from "react";
import cards from "../data/cardData";
import Card from './Card';

function CardArray({ upto }) {
    let cards__ = cards.slice(0, upto);
    cards__ = cards__.map((item) => {
        return (
            <Card
                url={item.url}
                info={item.info}
                alt={item.alt}
                bestseller={item.bestseller}
                name={item.name}
                rating={item.rating}
            />
        );
    });
    console.log(cards__);

    return (
        <div className="card--array">
            {cards__}
        </div>
    )
}

export default CardArray;
