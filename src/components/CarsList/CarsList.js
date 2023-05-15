import React from 'react';
import Card from '../Card/Card';


function CarsList({ cards, onEdit, onDelete }) {
  return (
    <div className="cars-list__container">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onEdit={onEdit}
          onDelete={onDelete}    
        />
      ))}
    </div>
  );
}

export default CarsList;