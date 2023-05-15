import React, { useState, useEffect } from 'react';
import carsApi from '../../utilis/CarsApi';
import CarsList from '../../components/CarsList/CarsList';



function Main() {
  const [carsList, setCarsList] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascend');

  useEffect(() => {
    carsApi.getCarsList()
      .then(res => setCarsList(res))
      .catch(err => console.log(err))
  }, []);

  console.log(carsList)
  const sortCarsByYear = () => {
    const sortedList = [...carsList].sort((a, b) => {
      if (sortOrder === 'ascend') {
        return a.year - b.year;
      } else {
        return b.year - a.year;
      }
    });
    setCarsList(sortedList);
    setSortOrder(sortOrder === 'ascend'
      ? 'descend'
      : 'ascend');
  };

  const sortCarsByPrice = () => {
    const sortedList = [...carsList].sort((a, b) => {
      if (sortOrder === 'ascend') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setCarsList(sortedList);
    setSortOrder(sortOrder === 'ascend'
      ? 'descend'
      : 'ascend');
  };

  const handleEdit = (updatedCard) => {
    const updatedList = carsList.map((card) => {
      if (card.id === updatedCard.id) {
        return {
          ...card,
          name: updatedCard.name,
          model: updatedCard.model,
          price: updatedCard.price,
        };
      }
      return card;
    });
    setCarsList(updatedList);
  };

  const handleDelete = (cardId) => {
    const updatedList = carsList.filter((card) => card.id !== cardId);
    setCarsList(updatedList);
  };

  return (
    <div className="main">
      <div className="main__container-buttons">
        <button className="main__sort-button" onClick={sortCarsByYear}>
          {`Сортировать по году выпуска (${sortOrder === 'ascend' ? 'по возрастанию' : 'по убыванию'})`}
        </button>
        <button className="main__sort-button" onClick={sortCarsByPrice}>
          {`Сортировать по стоимости (${sortOrder === 'ascend' ? 'по возрастанию' : 'по убыванию'})`}
        </button>
      </div>
      <CarsList cards={carsList} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Main;