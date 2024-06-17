import React from 'react';
import './ItemList.css';

const ItemList = ({ items, onItemClick }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item)}>
          <img src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.name} />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
