import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = (props) => {
  return (
    <div className="cards-container">
      {props.cards.map((card) => {
        return (
          <Card
            card={card}
            key={card.headline}
            headline={card.headline}
            tab={card.tab}
            img={card.img}
            author={card.author}
          />
        );
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;

/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
