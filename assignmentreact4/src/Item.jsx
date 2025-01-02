import React from 'react';

const Item = ({ item, deleteItem }) => {
  return (
    <li>
      {item}
      <button onClick={() => deleteItem(item)}>Delete</button>
    </li>
  );
};

export default Item;
