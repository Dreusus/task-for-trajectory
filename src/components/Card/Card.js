import React, { useState } from 'react';

function Card({ card, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(card.name);
  const [model, setModel] = useState(card.model);
  const [price, setPrice] = useState(card.price);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    const updatedCard = { ...card, name, model, price };
    onEdit(updatedCard);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setName(card.name);
    setModel(card.model);
    setPrice(card.price);
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    onDelete(card.id);
  };

  return (
    <div className="card">
      <div className="card__info">
        {editMode ? (
          <>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="card__year">{card.year}</p>
            <div className="card__color">Цвет: {card.color}</div>
          </>
        ) : (
          <>
            <h2 className="card__name">{card.name} {card.model}</h2>
            <p className="card__price">{card.price}&#36;</p>
            <p className="card__year">{card.year}</p>
            <div className="card__color">Цвет: {card.color}</div>
          </>
        )}
      </div>
      <div className="card__actions">
        {editMode ? (
          <>
            <button className="card__button card__button-save" onClick={handleSaveClick}>
              Сохранить
            </button>
            <button className="card__button card__button-cancel" onClick={handleCancelClick}>
              Отмена
            </button>
          </>
        ) : (
          <>
            <button className="card__button card__button-edit" onClick={handleEditClick}>
              Редактировать
            </button>
            <button className="card__button card__button-delete" onClick={handleDeleteClick}>
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;