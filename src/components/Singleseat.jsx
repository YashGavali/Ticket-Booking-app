import React from 'react';

const Singleseat = ({ element, seatClickHandler }) => {
  const { id, name, price, isSelected } = element;
  return (
    <div
      style={{
        backgroundColor: isSelected ? 'green' : 'maroon',
        margin: '5px',
        width: '200px',
      }}
      onClick={() => {
        seatClickHandler(id);
      }}
    >
      {name}
    </div>
  );
};

export default Singleseat;
